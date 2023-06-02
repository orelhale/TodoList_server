const { AppError } = require("../errorHandlerFiles/customErrorTypes");
let {
   findAll,
   create,
   update,
   deleteById,
   findByPk,
} = require("../dal/tasksModel")


function taskService_findAll(where) {
   return findAll(where);
}

function taskService_findAllAndOrder() {
   let options = {
      is_done: ["is_done", "ASC"],
      is_doneRevers: ["is_done", "DESC"],
      priority: ["priority", "ASC"],
      priorityRevers: ["priority", "DESC"],
      description: ["description", "ASC"],
      descriptionRevers: ["description", "DESC"],
      date: ["createdAt", "ASC"],
      dateRevers: ["createdAt", "DESC"],
   }

   return findAll({ order: [options.is_done, options.priorityRevers, options.date] });
}

function taskService_create(data) {
   return create(data);
}


function taskService_updateById(data, id) {
   if (!data)
      throw new AppError("Data is emapy")

   if (!id)
      throw new AppError("Id is emapy")

   return update(data, { id: id })
}


function taskService_findById(id) {
   if (!id)
      throw new AppError("Id is emapy")

   return findByPk(id)
}

function taskService_deleteById(id) {
   if (!id)
      throw new AppError("Id is emapy")

   return deleteById(id)
}

module.exports = {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
   taskService_findById,
}