const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./config/db');

const port = 3000;

db.connect();

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
