const Mac = require('../models/Mac');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MacController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Mac.find({})
            .then((macs) => {
                const array = [...mutipleMongooseToObject(macs)];
                if (id !== undefined) {
                    const mac = array.find((b) => Number(b.id) === Number(id));
                    return res.json([mac]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const mac = array.filter((b) => b.category === category);
                    const items = mac.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const mac = array.filter((b) => b.category === category);
                    return res.json([...mac]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
}

module.exports = new MacController();
