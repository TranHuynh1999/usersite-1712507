var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')

/* GET home page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Giới thiệu ' });
});

module.exports = router;
