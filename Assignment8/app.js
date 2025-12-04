'use strict';

const express = require('express');
const app = express();

// route to handle GET requests to /hello
// responds with plain text "Hello World!"
app.get("/hello", (req, res) => {
    res.type('text');
    res.send("Hello World!");
});


/*** EXERCISE 1 ***/
// route to handle GET requests to /math/circle/:r
// takes radius as a parameter and returns area and circumference as JSON
app.get("/math/circle/:r", (req, res) => {
    let radius = req.params.r;

    // check if radius is valid number, send error if not
    if (isNaN(radius) || radius < 0 ) {
        res.type('text').status(400).send('Error, Bad Request!');
    } else {
        res.json({
            area: calculateArea(radius),
            circumference: calculateCircumference(radius)
        });
    }
});

// HELPER FUNCTIONS for EXERCISE 1
// functions to calculate area and circumference rounding to 2 decimal places
function calculateArea(radius) {
    let area = Math.round((Math.PI * radius * radius) * 100) / 100;
    return area;
}
function calculateCircumference(radius) {
    let circumference = Math.round((2 * Math.PI * radius) * 100) / 100;
    return circumference;
}


/*** EXERCISE 2 ***/
// route to handle GET requests to /name/:first/:last
// responds with plain text greeting using the provided first and last name
app.get("/hello/name", (req, res) => {
    const first = req.query.first;
    const last = req.query.last;

    // check if both names are provided in the request URL
    let missing = [];
    if(!first) {
        missing.push("first");
    }

    if (!last) {
        missing.push("last");
    }
    // if any parameters are missing, send error
    if (missing.length > 0) {
        res.type('text/plain').status(400).send(`Missing Required GET parameters: ${missing.join(", ")}`);
    } else {
        res.type('text/plain').send(`Hello ${first} ${last}`);
    }
});

// start the server listening on a specified port
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
console.log(`Listening on port ${PORT}...`);


