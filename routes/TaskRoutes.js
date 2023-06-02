
let { Router } = require("express")
let tryCatch = require("../functions/tryCatch")
let { AppError } = require("../errorHandlerFiles/customErrorTypes")

let {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
   taskService_findById,
} = require("../BL/tasksService")

let router = Router()


router.get("/", tryCatch(async (req, res) => {

   res.status(200).send(await taskService_findAllAndOrder())
}))


router.post("/", tryCatch(async (req, res) => {

   await taskService_create(req.body)
   res.status(200).send(await taskService_findAllAndOrder())

}))


router.put("/", tryCatch(async (req, res, next) => {

   let findTask = await taskService_findById(req.body.id)

   if (!findTask)
      throw new AppError("Id not found")

   let updateTask = await taskService_updateById(req.body, req.body.id)

   if (!updateTask[0])
      throw new AppError("not updated")

   let allTask = await taskService_findAll()

   res.status(200).send(allTask)
}))


router.delete("/", tryCatch(async (req, res, next) => {

   await taskService_deleteById(req.body.id)
   res.status(200).send()
}))


module.exports = router