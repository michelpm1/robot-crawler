const puppeteer = require('puppeteer');

exports.scrapePageByCheckInOut = async (req, res) => {
  const  {checkIn, checkOut} = req.body;
  const pattern = new RegExp("^\\d{8}$");

  if (!checkIn.match(pattern) || !checkOut.match(pattern)) {
    res.status(500).send({error: 'Error, Wrong input data'});
  } else if(checkIn >= checkOut) {
      res.status(500).send({error: 'Error, Check-in date is bigger or the same as the check-out date'});
  }
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&
  sid=1182a15b-900a-4684-84e1-6007a4cd0721#/&CheckIn=${checkIn}&CheckOut=${checkOut}&diff=false&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-\ `;

    await page.goto(url);
    await page.waitForSelector('h6.bestPriceTextColor');
    await page.waitFor(1000);
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
    page.on("error", async () => {
      await page.close();
      res.status(500).send({error: 'Error, Page is probably offline or taking too long to load'});
    });
    await browser.close();
    return res.json(result);
};

