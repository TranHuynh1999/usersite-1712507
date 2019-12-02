var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')
/* GET home page. */
router.get('/shop.html', function(req, res, next) {
  res.render('shop', { title: 'Mua Ngay ' });
});

module.exports = router;