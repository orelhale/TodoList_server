
let { Router } = require("express")
let { findAll, findById } = require("../DB/PostgreSQL/del/usersModels")

let router = Router()


router.get("/", (req, res) => {
   try {
      res.status(200).send("TempRoutes")
   } catch (err) {
      console.log({ "path error": "/", dataError: err });
   }
})


// router.get("/findAll", async (req, res) => {
//    try {
//       res.status(200).send(await findAll())
//    } catch (err) {
//       res.status(400).send({ "path error": "findAll", dataError: err })
//    }
// })

// router.post("/getById", async (req, res) => {
//    try {
//       if (!req.body.id)
//          throw "id is missing"
//       res.status(200).send(await findById(req.body.id))
//    } catch (err) {
//       res.status(400).send({ "path error": "findById", dataError: err })
//    }
})

module.exports = router