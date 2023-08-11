const Banner = require('./Banner');
const BannerSmall = require('./BannerSmall');
const Iphone = require('./Iphone');
const Ipad = require('./Ipad');
const Mac = require('./Mac');
const Watch = require('./Watch');

function route(app) {
    app.use('/banner', Banner);
    app.use('/bannerSmall', BannerSmall);
    app.use('/iPhone', Iphone);
    app.use('/iPad', Ipad);
    app.use('/Mac', Mac);
    app.use('/Watch', Watch);
}

module.exports = route;
