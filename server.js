const http = require('http')
require('dotenv').config()

const PORT = process.env.port || 3000

const server = http.createServer()

server.listen(PORT)