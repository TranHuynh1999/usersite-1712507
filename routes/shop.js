var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shop.html', function(req, res, next) {
  res.render('shop', { title: 'Mua Ngay ' });
});

module.exports = router;