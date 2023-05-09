
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PostgresHost,
  port: process.env.PostgresPort,
  database: process.env.PostgresDatabase,
  username: process.env.PostgresUser,
  password: process.env.PostgresPassword,
});

module.exports = sequelize