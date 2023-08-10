const Banner = require('./Banner');

function route(app) {
    app.use('/', Banner);
}

module.exports = route;
