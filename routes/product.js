var express = require('express');
var router = express.Router();
var controllerProduct= require('../controllers/product.controller')

/* GET home page. */
router.get('/', controllerProduct.product);
  
module.exports = router;
