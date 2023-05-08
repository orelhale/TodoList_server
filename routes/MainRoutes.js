
let SystemRoutes = require("./SystemRoutes")
let TempMongoDBRoutes = require("./TempMongoDBRoutes")
let TempPostreSQLRoutes = require("./TempPostreSQLRoutes")

function MainRoutes(server) {

   server.use((req, res, next) => {
      console.log("\nURL = ", req.url);
      console.log("body = ", req.body);
      console.log("\n");
      next();
   })

   server.use("/system", SystemRoutes)
   server.use("/tempMongo", TempMongoDBRoutes)
   server.use("/tempPostres", TempPostreSQLRoutes)
   server.use("*", (req, res) => res.status(404).send("Path does not exist"))

}

module.exports = MainRoutes;