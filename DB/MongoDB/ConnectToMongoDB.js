let mongoose = require("mongoose")


async function ConnectToMongoDB() {

   await mongoose.connect(process.env.LOCAL_MYMONGO)
      .then(() => {
         console.log("MongoDB is Connected in = " + process.env.LOCAL_MYMONGO);
      })
      .catch(error => {
         console.log("error in mongo = ", error)
         console.log("\n")
      });

}

module.exports = ConnectToMongoDB