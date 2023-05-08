let { craeteOne, findAll, findById, } = require("../DB/PostgreSQL/del/usersModels")


async function craeteOneTemp(obj) {
   return await craeteOne(obj);
}


async function findAllTemp() {
   return await findAll();
}


async function findByIdTemp(id) {
   let temp = await findById(id);
   return temp
}


module.exports = { craeteOneTemp, findByIdTemp, findAllTemp }