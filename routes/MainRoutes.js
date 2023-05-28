
let TaskRoutes = require("./TaskRoutes")


function MainRoutes(server) {

   server.use((req, res, next) => {
      console.log("\nURL = ", req.url);
      console.log("body = ", req.body);
      console.log("\n");
      next();
   })

   server.use("/tasks", TaskRoutes)
   server.use("*", (req, res) => res.status(404).send("Path does not exist"))
}

module.exports = MainRoutes;