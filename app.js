require('babel-register')({
  presets: [ 'env' ]
});
const { port, env } = require('./config/vars');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// open mongoose connection
const db = mongoose.connect('mongodb://localhost/tangle_sensor');
/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
// const userController = require('./controllers/user');
// const apiController = require('./controllers/api');
// const contactController = require('./controllers/contact');



app.get('/', homeController.index);

// listen to request

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */
module.exports = app;