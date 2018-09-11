const path = require('path');

// import .env variables
require('dotenv-safe').load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
});

module.exports = {
    env: process.env.DE_ENV,
    port: process.env.PORT,
    logs: process.env.DE_ENV === 'production' ? 'combined' : 'dev',
    rateLimitTime: process.env.RATE_LIMIT_TIME,
    rateLimitRequest: process.env.RATE_LIMIT_REQUEST
};