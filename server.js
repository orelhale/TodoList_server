let express = require("express")
require("dotenv").config()
let cors = require('cors')

let MainRoutes = require("./routes/MainRoutes")
let { logErrors, clientErrorHandler,errorHandler } = require("./ErrorHandlerFiles/errorsHandling")

let server = express()
server.use(express.json())
server.use(cors())


MainRoutes(server)

server.use(logErrors)
server.use(clientErrorHandler)
server.use(errorHandler)

let port = process.env.MYPORT || 8081;


server.listen(port, async () => {
   console.log("\nThe server run in port " + port);
})
