require('dotenv').config()


const server = require('http').createServer()


server.on('request', require('./app'))


server.listen(process.env.PORT, () => console.log(`Server listening on port : ${process.env.PORT}`))
