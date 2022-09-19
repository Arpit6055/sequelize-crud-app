require('dotenv').config();
const env = process.env;

module.exports = {
  HOST: env.DATABASE_CMAOPDB_HOST || "localhost",
  USER: env.DATABASE_CMAOPDB_USERNAME ||"postgres",
  PASSWORD: env.DATABASE_CMAOPDB_PASSWORD || "",
  DB: env.DATABASE_CMAOPDB_NAME || "testdb",
  dialect: env.DATABASE_CMAOPDB_DIALECT || "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
