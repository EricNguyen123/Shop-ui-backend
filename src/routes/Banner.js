const express = require('express');
const router = express.Router();
const BannerController = require('../controllers/BannerController');

router.get('/', BannerController.index);

module.exports = router;
