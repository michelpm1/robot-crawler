require('babel-register')({
  presets: [ 'env', 'es2017', 'stage-0' ]
});
require("babel-polyfill");
const { port, env } = require('./config/vars');
const express = require('express');
let app = express();

const homeController = require('./controllers/scrape');

app.get('/scrape', homeController.scrapePageByCheckInOut, (req, res) => {
  console.log(res);
});

// listen to request

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */
module.exports = app;