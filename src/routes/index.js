const Banner = require('./Banner');
const BannerSmall = require('./BannerSmall');
const Iphone = require('./Iphone');
const Ipad = require('./Ipad');
const Mac = require('./Mac');
const Watch = require('./Watch');
const Sound = require('./Sound');
const Accessory = require('./Accessory');
const BannerPage = require('./BannerPage');
const Endow = require('./Endow');
const Series = require('./Series');
const Blog = require('./Blog');
const Rating = require('./Rating');
const Comment = require('./Comment');
const ServiceUser = require('./ServiceUser');

function route(app) {
    app.use('/banner', Banner);
    app.use('/bannerSmall', BannerSmall);
    app.use('/iPhone', Iphone);
    app.use('/iPad', Ipad);
    app.use('/Mac', Mac);
    app.use('/Watch', Watch);
    app.use('/Sound', Sound);
    app.use('/Accessory', Accessory);
    app.use('/bannerPage', BannerPage);
    app.use('/endow', Endow);
    app.use('/series', Series);
    app.use('/blog', Blog);
    app.use('/rating', Rating);
    app.use('/comment', Comment);
    app.use('/serviceUser', ServiceUser);
}

module.exports = route;
