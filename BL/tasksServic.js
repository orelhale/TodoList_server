let {
   findAll,
   addTask,
   editTask,
   deleteTask,
} = require("../dal/tasksModel")


async function servic_findAll() {
   try {
      return await findAll();
   } catch (error) {
      throw (error)
   }
}

async function servic_findAllAndOrder() {
   try {
      let options = {
         is_done: ["is_done", "ASC"],
         is_doneRevers: ["is_done", "DESC"],
      }
      return await findAll({ order: [options.is_done] });
   } catch (error) {
      throw (error)
   }
}

async function servic_addTask(data) {
   try {
      if (!data)
         throw ("ERROR: data is empty")

      return await addTask(data);
   } catch (error) {
      throw (error)
   }
}

async function servic_editTask(data, id) {
   try {
      if (!data)
         throw ("ERROR: data is empty")
      if (!id)
         throw ("ERROR: id is empty")

      return await editTask(data, id);
   } catch (error) {
      throw (error)
   }
}

async function servic_deleteTask(id) {
   try {
      if (!id)
         throw ("ERROR: id is empty")

      return await deleteTask(id);
   } catch (error) {
      throw (error)
   }
}

module.exports = {
   servic_findAll,
   servic_addTask,
   servic_editTask,
   servic_deleteTask,
   servic_findAllAndOrder,
}