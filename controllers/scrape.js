const puppeteer = require('puppeteer');

exports.scrapePageByCheckInOut = async (req, res) => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=1182a15b-900a-4684-94e1-6007a4cd0723#/&diff=false&CheckIn=${process.argv[2]}&CheckOut=${process.argv[3]}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-\ `;

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
      let imageUrl = rootUrl + element.querySelector('div.roomSlider > div:nth-child(2) > a.fancybox-thumbs > img').getAttribute('src');

      data.push({name, description, price, imageUrl});
    });
    return data;
  });
  await browser.close();
  return res.json(result);
};