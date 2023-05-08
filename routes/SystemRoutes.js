
let { Router } = require("express")
let router = Router()
let { createToken, checkToken } = require("../BL/systemServic")


router.get("/", (req, res) => {
   try {
      res.status(200).send("system")
   } catch (err) {
      res.status(400).send(err)
   }
})


router.post("/login", (req, res) => {
   try {
      res.status(200).send("login")
   } catch (err) {
      res.status(400).send(err)
   }
})


router.post("/register", (req, res) => {
   try {
      res.status(200).send("register")
   } catch (err) {
      res.status(400).send(err)
   }
})


router.post("/createToken", (req, res) => {
   try {
      let objectData = req.body.objectData
      let token = createToken(objectData);
      res.status(200).send(token)
   } catch (err) {
      res.status(400).send({ err: err })
   }
})


router.post("/checkToken", (req, res) => {
   try {
      let token = req.body.token
      let objectData = checkToken(token);
      res.status(200).send(objectData)
   } catch (err) {
      res.status(400).send(err)
   }
})


module.exports = router