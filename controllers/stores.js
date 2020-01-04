const Store = require('../models/store');


exports.getStore = async (req, res) => {
    try {
        const store = await Store.find({});

        return res.send({
            success: true,
            count: store.length,
            data: store
        });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
        });
    }
}

exports.addStore = async (req, res) => {
    try {
        console.log(req.body)
        const store = await Store.create(req.body);

        return res.send({
            success: true,
            data: store
        });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
        });
    }
}