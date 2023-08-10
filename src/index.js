const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./config/db');
const route = require('./routes');

const port = 3000;

db.connect();

app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
