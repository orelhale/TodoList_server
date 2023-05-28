let {
   findAll,
   create,
   update,
   deleteById,
} = require("../dal/tasksModel")


async function taskService_findAll(where) {
   try {
      return await findAll(where);
   } catch (error) {
      throw (error)
   }
}

function taskService_findAllAndOrder() {
   try {
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
   } catch (error) {
      throw (error)
   }
}

function taskService_create(data) {
   try {
      if (!data)
         throw ("ERROR: data is empty")

      return create(data);
   } catch (error) {
      throw (error)
   }
}

async function taskService_updateById(data, id) {
   try {
      if (!data)
         throw ("ERROR: data is empty")

      if (!id)
         throw ("ERROR: id is empty")

      return await update(data, { id: id });
   } catch (error) {
      throw (error)
   }
}

async function taskService_deleteById(id) {
   try {
      if (!id)
         throw ("ERROR: id is empty")

      return await deleteById(id);
   } catch (error) {
      throw (error)
   }
}

module.exports = {
   taskService_findAll,
   taskService_create,
   taskService_updateById,
   taskService_deleteById,
   taskService_findAllAndOrder,
}