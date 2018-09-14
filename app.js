require('babel-register')({
  presets: [ 'env', 'es2017', 'stage-0' ]
});
require("babel-polyfill");
const { port, env } = require('./config/vars');
const express = require('express');
let app = express();

const homeController = require('./service/scrape');

app.get('/scrape', homeController.scrapePageByCheckInOut, (req, res) => {
});

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

module.exports = app;