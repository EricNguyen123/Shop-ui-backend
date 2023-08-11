const Iphone = require('../models/Iphone');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class IphoneController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Iphone.find({})
            .then((iphones) => {
                const array = [...mutipleMongooseToObject(iphones)];
                if (id !== undefined) {
                    const iphone = array.find((b) => Number(b.id) === Number(id));
                    return res.json([iphone]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const iphone = array.filter((b) => b.category === category);
                    const items = iphone.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const iphone = array.filter((b) => b.category === category);
                    return res.json([...iphone]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
}

module.exports = new IphoneController();
