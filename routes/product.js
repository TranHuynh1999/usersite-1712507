var express = require('express');
var router = express.Router();
var Product=require('../models/product');
const { check, validationResult } = require('express-validator');
var  passport = require('passport')


/* GET home page. */
router.get('/product.html', function(req, res, next) {
  
  res.render('product', { title: 'Sản phẩm ' });
});

  
  
  
  
module.exports = router;
