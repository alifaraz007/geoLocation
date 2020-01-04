
const express = require('express');
const storeController = require('../controllers/stores');

const router = express.Router();

router.get('/', storeController.getStore);

router.post('/', storeController.addStore);


module.exports = router;