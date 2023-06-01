let {
   findAll,
   create,
   update,
   deleteById,
} = require("../dal/tasksModel")


async function taskService_findAll(where) {
   return await findAll(where);
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
   if (!data)
      throw ("ERROR: data is empty")

   return create(data);
}

async function taskService_updateById(data, id) {
   if (!data)
      throw ("ERROR: data is empty")

   if (!id)
      throw ("ERROR: id is empty")

   return await update(data, { id: id });
}

async function taskService_deleteById(id) {
   if (!id)
      throw ("ERROR: id is empty")

   return await deleteById(id);
}

module.exports = {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
}