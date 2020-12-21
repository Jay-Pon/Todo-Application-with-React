const Pool = require("pg").Pool;

const pool = new Pool({
    user: "aakash",
    host: "localhost",
    port: 5432,
    database: "aakash"
})

module.exports = pool;