
let { Router } = require("express")
let {
   servic_findAll,
   servic_addTask,
   servic_editTask,
   servic_deleteTask,
   servic_findAllAndOrder,
} = require("../BL/tasksServic")

let router = Router()


router.get("/", async (req, res) => {
   try {
      res.status(200).send(await servic_findAllAndOrder())
   } catch (err) {
      res.status(400).send(err)
   }
})


router.post("/", async (req, res) => {
   try {
      await servic_addTask(req.body)
      res.status(200).send(await servic_findAllAndOrder())
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
      await servic_editTask(req.body, req.body.id)

      res.status(200).send(await servic_findAllAndOrder())
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

      await servic_deleteTask(req.body.id)
      res.status(200).send()
   } catch (err) {
      res.status(400).send(err)
   }
})



module.exports = router