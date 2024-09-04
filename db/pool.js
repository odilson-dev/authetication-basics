const { Pool } = require("pg");
require("dotenv").config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.ROLE_NAME,
  database: process.env.DATABASE_NAME,
  password: process.env.ROLE_PASSWORD,
  port: process.env.DEFAULT_PORT, // The default port
});
