// Postgres Database configuration
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'database-postgres',
  database: 'postgres',
  password: 'docker',
  port: 5432,
})

module.exports = {
  pool
};