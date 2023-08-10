const Banner = require('./Banner');
const BannerSmall = require('./BannerSmall');

function route(app) {
    app.use('/banner', Banner);
    app.use('/bannerSmall', BannerSmall);
}

module.exports = route;
