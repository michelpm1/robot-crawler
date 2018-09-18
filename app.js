require('babel-register')({
  presets: [ 'env', 'es2017', 'stage-0' ]
});
require("babel-polyfill");
const { port, env } = require('./config/vars');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const scrapeService = require('./service/scrape');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/scrape', scrapeService.scrapePageByCheckInOut, (req, res, next) => {
});

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

module.exports = app;