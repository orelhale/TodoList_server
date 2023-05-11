let { Client } = require("pg");


// query to posrtres
function adminQueryToPostgres(client, query, logSuccess) {
   return client.connect()
      .then(() => client.query(query))
      .then((data) => {
         console.log(logSuccess)
         return data
      })
      .catch((err) => console.log("Error: in adminQueryToPostgres = ", err))
      .finally(() => client.end())
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


// create new database
async function createNewDatabase(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser_WithOutDatabase(user, password, port, host)
   // database name (from function or from env file)
   let database = databaseName || process.env.PostgresDatabase;
   // query to posrtres
   return await adminQueryToPostgres(client, `CREATE DATABASE ${database}`, `success to create database = ${database}`)
}

// create new database
async function createNewDatabase2(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser_WithOutDatabase(user, password, port, host)
   // database name (from function or from env file)
   let database = databaseName || process.env.PostgresDatabase;
   // query to posrtres
   const query = `
    SELECT 
        "d"."datname" AS "database_name",
        pg_size_pretty(pg_database_size("d"."datname")) AS "database_size"
    FROM "pg_database" AS "d"
`;
   let text = `SELECT * FROM pg_database`
   let { rows } = await client.query(query);

   //  let text = `SELECT 'CREATE DATABASE ${database}' WHERE NOT EXISTS (`
   //  console.log("text = ",text + "\n");
   console.log("checkDB = ", "checkDB" + "\n");
   //  return await adminQueryToPostgres(client,text, `success to create database = ${database}` )
}


// delete database
async function deleteDatabase(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser_WithOutDatabase(user, password, port, host)
   // database name (from function or from env file)
   let database = databaseName;
   if (!database) {
      console.log("database is empty");
      return;
   }
   // query to posrtres
   return await adminQueryToPostgres(client, `DROP DATABASE ${database}`, `success to drop database = ${database}`)
}



// check if database exist
async function getListOfDatabase(databaseName) {
   let client = await connectToPosegresUser_WithOutDatabase()
   let list = await adminQueryToPostgres(client, `SELECT datname FROM pg_database`)
   console.log("list = ", list);
}

// drop table
async function dropTables(tableName = "tasks") {
   // create connect to postgres user
   let client = await connectToPosegresUser()

   let drop = `
      drop table IF EXISTS ${tableName};
      drop SEQUENCE IF EXISTS sequence_1;
   `
   return await adminQueryToPostgres(client, drop, `success to drop tables`)
}

// Check if the tables exist and if not create table
async function checkTableAndCreate(databaseName, user, password, port, host) {
   // create connect to postgres user
   let client = await connectToPosegresUser(user, password, port, host, databaseName)

   // query to posrtres
   let newTable = `
      CREATE SEQUENCE IF NOT EXISTS sequence_1
         start with 1
         increment by 1
         minvalue 0
         maxvalue 100
         cycle;
         
      CREATE TABLE IF NOT EXISTS tasks (
         id INT,

         description TEXT NOT NULL,
         priority INT DEFAULT 1,
         startDate BIGINT,
         startEnd BIGINT,
         is_done BOOL
      );

   `

   return await adminQueryToPostgres(client, newTable, `success to check tables`)
}

module.exports = {
   createNewDatabase,
   deleteDatabase,
   getListOfDatabase,
   createNewDatabase2,
   checkTableAndCreate,
   dropTables,
}