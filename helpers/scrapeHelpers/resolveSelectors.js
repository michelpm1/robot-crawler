exports.resolveScrapeByCheckInOut = (elementsObj) => {
  let data = [];
  const rootUrl = 'https://myreservations.omnibees.com/';
  elementsObj.forEach((element) => {
    let name = element.querySelector('h5 > a').innerText;
    let description = element.querySelector('a.description').innerText;
    let price = element.querySelector('h6.bestPriceTextColor').innerText;
    let imageUrl = rootUrl + element.querySelector('div.roomSlider > div:nth-child(2) > a.fancybox-thumbs > img').getAttribute('src');

    data.push({name, description, price, imageUrl});
  });
  return data;
};