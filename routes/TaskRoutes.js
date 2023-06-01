
let { Router } = require("express")
let {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
} = require("../BL/tasksService")


let router = Router()


router.get("/", async (req, res) => {
   try {
      res.status(200).send(await taskService_findAllAndOrder())
   } catch (err) {
      res.status(400).send(err)
   }
})


router.post("/", async (req, res) => {
   try {
      await taskService_create(req.body)
      res.status(200).send(await taskService_findAllAndOrder())
   } catch (err) {
      res.status(400).send(err)
   }
})


router.put("/", async (req, res) => {
   try {
      if (!req.body)
         throw ("ERROR: body is emapy")

      if (!req.body.id)
         throw ("ERROR: id is emapy")
      await taskService_updateById(req.body, req.body.id)

      res.status(200).send(await taskService_findAllAndOrder())
   } catch (err) {
      res.status(400).send(err)
   }
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