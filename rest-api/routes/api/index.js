const { Router } = require('express');

module.exports = Router()
    .use('/payment', require('./payment'));
