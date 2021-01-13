const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(require('./routes'))


module.exports = app;