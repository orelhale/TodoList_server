
let connetToPostgres = require("../connetToPostgres")


async function findAll() {
   let result = await connetToPostgres("select * from users")
   return result;
}

async function findById(id) {
   let result = await connetToPostgres(`select * from users where id = ${id}`)
   return result;
}

module.exports = { findAll, findById }