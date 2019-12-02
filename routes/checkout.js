var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')


/* GET home page. */
router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Kiểm tra giỏ hàng ' });
});

module.exports = router;