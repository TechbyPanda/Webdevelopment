const express = require('express');
const router = express.Router();
const indexController = require('../controller/index_controler');

router.get('/',indexController.homePage);
router.post('/send',indexController.faq);

module.exports = router;