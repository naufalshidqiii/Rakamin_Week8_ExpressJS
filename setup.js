const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "week8_rakamin",
	password: "admin",
	post: 5432,
});

module.exports = pool;
