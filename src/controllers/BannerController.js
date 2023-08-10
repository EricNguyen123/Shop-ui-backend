const Banner = require('../models/Banner');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BannerController {
    index(req, res, next) {
        Banner.find({})
            .then((banners) => res.json(banners))
            .catch(next);
    }
}

module.exports = new BannerController();
