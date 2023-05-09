let express = require("express")
require("dotenv").config()
let cors = require('cors')

let { checkTableAndCreate , dropTables} = require("./DB/PostgreSQL/functionPostgresOfAdmin")


let MainRoutes = require("./routes/MainRoutes")

let server = express()
server.use(express.json())
server.use(cors())


MainRoutes(server)

let port = process.env.MYPORT || 8081;



server.listen(port, async () => {
   // Drop tables
   // await dropTables()
   
   console.log("\nThe server run in port " + port);
})
