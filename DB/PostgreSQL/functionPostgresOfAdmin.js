let { Client } = require("pg");


// query to posrtres
function adminQueryToPostgres(client, query, logSuccess) {
   return client.connect()
      .then(() => client.query(query))
      .then((data) => {
         console.log(`success: ${logSuccess}`)
         return data
      })
      .catch((err) => console.log("Error: in adminQueryToPostgres = ", err))
      .finally(() => client.end())
}


// create new database
async function createNewDatabase(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser_WithOutDatabase(user, password, port, host)
   // database name (from function or from env file)
   let database = databaseName || process.env.PostgresDatabase;
    // query to posrtres
   return await adminQueryToPostgres(client, `CREATE DATABASE ${database}`, `success to create database = ${database}`)
}


// delete database
async function deleteDatabase(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser_WithOutDatabase(user, password, port, host)
   // database name (from function or from env file)
   let database = databaseName;
   if(!database){
      console.log("database is empty");
      return;
   } 
   // query to posrtres
   return await adminQueryToPostgres(client, `DROP DATABASE ${database}`, `success to drop database = ${database}`)
}


// create connect to specific database of postgres user
function connectToPosegresUser(user, password, port, host, database) {
   return new Client({
      host: host || process.env.PostgresHost,
      user: user || process.env.PostgresUser,
      password: password || process.env.PostgresPassword,
      port: port || process.env.PostgresPort,
      database: database || process.env.PostgresDatabase,
   })
}

// create connect to postgres user
function connectToPosegresUser_WithOutDatabase(user, password, port, host) {
   return new Client({
      host: host || process.env.PostgresHost,
      user: user || process.env.PostgresUser,
      password: password || process.env.PostgresPassword,
      port: port || process.env.PostgresPort,
   })
}


// check if database exist
async function getListOfDatabase(databaseName) {
   let client = await connectToPosegresUser_WithOutDatabase()
   let list = await adminQueryToPostgres(client,`SELECT datname  FROM pg_database`)
   console.log("list = ",list);
}


module.exports = { createNewDatabase, deleteDatabase , getListOfDatabase}