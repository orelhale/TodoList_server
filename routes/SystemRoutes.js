
let { Router } = require("express")
let router = Router()
let { createToken, checkToken } = require("../BL/systemservice")


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
      let dataObject = req.body.dataObject
      let token = createToken(dataObject);
      res.status(200).send(token)
   } catch (err) {
      res.status(400).send({ err: err })
   }
})


router.post("/checkToken", (req, res) => {
   try {
      let token = req.body.token
      let dataObject = checkToken(token);
      res.status(200).send(dataObject)
   } catch (err) {
      res.status(400).send(err)
   }
})


module.exports = router