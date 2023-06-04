let express = require("express")
require("dotenv").config()
let cors = require('cors')

let mainRoutes = require("./routes/mainRoutes")
let { logErrors, clientErrorHandler,errorHandler } = require("./errorHandlerFiles/errorsHandling")

let server = express()

server.use(express.json())
server.use(cors())


mainRoutes(server)

server.use(logErrors)
// server.use(clientErrorHandler)
server.use(errorHandler)

let port = process.env.MYPORT || 8081;


server.listen(port, async () => {
   console.log("\nThe server run in port " + port);
})
