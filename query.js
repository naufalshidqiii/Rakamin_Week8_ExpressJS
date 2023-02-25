const pool = require("./setup.js");
const express = require("express");
const router = express.Router();

// Get Actor
router.get("/actors", (req, res) => {
	const query = `
    SELECT
        *
    FROM actor
    `;

	pool.query(query, (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

// Get Films List
router.get("/films", (req, res) => {
	const query = `
    SELECT
        *
    FROM film
    `;

	pool.query(query, (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

// Get Films by ID
router.get("/films=1", (req, res) => {
	const query = `
    SELECT
        *
    FROM film
    WHERE film_id = 1
    `;

	pool.query(query, (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

module.exports = router;
