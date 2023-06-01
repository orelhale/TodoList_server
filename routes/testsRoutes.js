let { Router } = require("express")
let { DatabaseError, EmptyFieldError } = require("../ErrorHandlerFiles/customErrorTypes")


let router = Router()

router.get("/1", (req, res, next) => {
   throw new DatabaseError("DatabaseError")
})

router.get("/2", (req, res, next) => {
   throw new EmptyFieldError("EmptyFieldError")
})

router.post("/test3", (req, res, next) => {
   if (!req.body.id)
      throw new EmptyFieldError("Id is empty")

   res.status(200).send("good")
})


module.exports = router
