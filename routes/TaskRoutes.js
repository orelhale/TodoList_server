
let { Router } = require("express")
let { EmptyFieldError } = require("../ErrorHandlerFiles/customErrorTypes")

let {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
} = require("../BL/tasksService")


let router = Router()


router.get("/", async (req, res) => {
   res.status(200).send(await taskService_findAllAndOrder())
   // try {
   // } catch (err) {
   //    res.status(400).send(err)
   // }
})


router.post("/", async (req, res) => {
   await taskService_create(req.body)
   res.status(200).send(await taskService_findAllAndOrder())
   // try {
   // } catch (err) {
   //    res.status(400).send(err)
   // }
})


router.put("/", async (req, res, next) => {

      if (!req.body.id)
      next(new EmptyFieldError("Id is emapy"))

   // throw ("ERROR: id is emapy")
   let gg = await taskService_updateById(req.body, req.body.id)
      .catch(err=>next(err))

   res.status(200).send(await taskService_findAllAndOrder())
   // try {
   // } catch (err) {
   //    res.status(400).send(err)
   // }
})


router.delete("/", async (req, res) => {
   try {
      if (!req.body)
         throw ("ERROR: body is emapy")

      if (!req.body.id)
         throw ("ERROR: id is emapy")

      await taskService_deleteById(req.body.id)
      res.status(200).send()
   } catch (err) {
      res.status(400).send(err)
   }
})


module.exports = router