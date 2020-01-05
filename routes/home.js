var express = require('express');
var router = express.Router();
var controllerIndex=require('../controllers/index.controller');

/* GET home page. */
router.get('/', controllerIndex.home);

router.get('/about',controllerIndex.about);

router.get('/contact', controllerIndex.contact);

router.get('/checkout', controllerIndex.checkout);

module.exports = router;
 