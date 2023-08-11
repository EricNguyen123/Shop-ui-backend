const express = require('express');
const router = express.Router();
const MacController = require('../controllers/MacController');

router.get('/', MacController.index);

module.exports = router;
