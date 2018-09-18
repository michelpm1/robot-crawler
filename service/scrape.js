const puppeteer = require('puppeteer');

exports.scrapePageByCheckInOut = async (req, res) => {
  const  {checkIn, checkOut} = req.body;
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&
  sid=1182a15b-900a-4684-84e1-6007a4cd0721#/&CheckIn=${checkIn}&CheckOut=${checkOut}&diff=false&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-\ `;

  await page.goto(url);
  await page.waitFor(6000);
  const result = await page.evaluate(() => {
    let data = [];
    const rootUrl = 'https://myreservations.omnibees.com/';
    let elements = document.querySelectorAll('tr.roomName');
    elements.forEach((element) => {
      let name = element.querySelector('h5 > a').innerText;
      let description = element.querySelector('a.description').innerText;
      let price = element.querySelector('h6.bestPriceTextColor').innerText;
      let imageUrl = rootUrl + element.querySelector(
        'div.roomSlider > div:nth-child(2) > a.fancybox-thumbs > img').getAttribute('src');

      data.push({name, description, price, imageUrl});
    });
    return data;
  });
  await browser.close();
  return res.json(result);
};