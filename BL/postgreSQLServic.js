let { findAll, findById } = require("../DB/MongoDB/del/TempModel")



async function findAllTemp() {
   return await findAll();
}


async function findByIdTemp(id) {
   let temp = await findById(id);
   return temp
}


module.exports = {  findByIdTemp, findAllTemp }