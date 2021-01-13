const { Router } = require('express');

module.exports = Router()
    .use('/api', require('./api'))
    .use((_,res) => res.status(404));