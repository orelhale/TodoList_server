let express = require("express")
let cors = require('cors')
const http = require('http');
require("dotenv").config()

let { checkTableAndCreate, dropTables } = require("./DB/PostgreSQL/functionPostgresOfAdmin")

let MainRoutes = require("./routes/MainRoutes")
let createSocket = require("./socket")


let app = express()
const server = http.createServer(app);

app.use(express.json())
app.use(cors())

MainRoutes(app)


let port = process.env.MYPORT || 8081;

server.listen(port, async () => {
   // Drop tables
   // await dropTables()

   console.log("\nThe app run in port " + port);

   createSocket(server)
   // mySocket(server)
})
