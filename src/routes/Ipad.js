const express = require('express');
const router = express.Router();
const IpadController = require('../controllers/IpadController');

router.get('/', IpadController.index);

module.exports = router;
