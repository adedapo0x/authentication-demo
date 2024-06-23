const http = require('http')

require('dotenv').config()
const connectDB = require('./src/db')

const PORT = process.env.port || 3000

const app = require('./src/app')

const server = http.createServer(app)

// Note: Function to start server not really needed, could've done that normally
// introduces the fact that other configurations could have been wished to be done before 
// starting the server

async function startServer(){
    await connectDB()
    server.listen(PORT)
}

startServer()