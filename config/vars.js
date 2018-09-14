const path = require('path');

// import .env variables
require('dotenv-safe').load({
    path: path.join(__dirname, '../.env')});

module.exports = {
    env: process.env.DE_ENV,
    port: process.env.PORT,
    logs: process.env.DE_ENV === 'production' ? 'combined' : 'dev'
};