let { Client } = require("pg");


async function queryToPostgres(query) {

   let client = new Client({
      user: process.env.PostgresUser,
      host: process.env.PostgresHost,
      database: process.env.PostgresDatabase,
      password: process.env.PostgresPassword,
      port: parseInt(process.env.PostgresPort)
   });
   
   return client.connect()
      .then(() => client.query(query))
      .then((data) => {
         console.log(`success: ${logSuccess}`);
         return data
      })
      .catch((err) => console.log("Error: in adminQueryToPostgres = ", err))
      .finally(() => client.end())
}


module.exports = queryToPostgres;