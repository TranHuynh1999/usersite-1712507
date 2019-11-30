var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Giới thiệu ' });
});

module.exports = router;
