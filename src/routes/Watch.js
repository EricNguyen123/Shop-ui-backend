const express = require('express');
const router = express.Router();
const WatchController = require('../controllers/WatchController');

router.get('/', WatchController.index);

module.exports = router;
