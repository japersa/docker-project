const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'testdb'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to database', err);
        process.exit(1);
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).send('Error executing query');
        } else {
            res.json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});