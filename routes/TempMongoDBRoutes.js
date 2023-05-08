
let { Router } = require("express")
let { craeteOneTemp, findByIdTemp, findAllTemp } = require("../BL/mongoDBServic")

let router = Router()


router.get("/", (req, res) => {
   try {
      res.status(200).send("TempRoutes")
   } catch (err) {
      console.log({ "path error": "/", dataError: err });
   }
})


router.post("/", async (req, res) => {
   try {
      let newDate = await craeteOneTemp(req.body)
      res.status(200).send(newDate)
   } catch (err) {
      console.log({ "path error": "create", dataError: err });
   }
})


// router.get("/findAll", async (req, res) => {
//    try {
//       let list = await findAllTemp()
//       res.status(200).send(list)
//    } catch (err) {
//       res.status(400).send({ "path error": "findAll", dataError: err })
//    }
// })


// router.post("/findById", async (req, res) => {
//    try {
//       let id = req.body.id
//       console.log("id = ", id);
//       if (!id) {
//          throw "there is not id"
//       }
//       res.status(200).send(await findByIdTemp(id))
//    } catch (err) {
//       res.status(400).send({ "path error": "findById", dataError: err })
//    }
// })


module.exports = router