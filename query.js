const pool = require("./setup.js");
const express = require("express");
const router = express.Router();

// http://localhost:3000

// Get Actor -- Static Routing
http: router.get("/actors", (req, res) => {
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

// Get Films List -- Static Routing
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

// Get Films by ID = 1 -- Static Routing
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

// Get Any Film by ID -- Dynamic Routing
router.get("/films/:film_id", (req, res) => {
	const { film_id } = req.params;

	const query = `
    SELECT
        *
    FROM film
    WHERE film_id = $1
    `;

	pool.query(query, [film_id], (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

// Get Category List -- Static Routing
router.get("/category", (req, res) => {
	const query = `
    SELECT
        name
    FROM category
    `;

	pool.query(query, (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

// Get Film List by Category -- Static Routing
router.get("/film-category", (req, res) => {
	const query = `
    SELECT 
           film.title AS film_title,
           category.name AS category_name

        FROM film
            INNER JOIN film_category AS cat
                ON cat.film_id = film.film_id
            INNER JOIN category
            	ON cat.category_id = category.category_id
    `;

	pool.query(query, (err, response) => {
		if (err) throw err;

		res.status(200).json(response.rows);
	});
});

module.exports = router;
