var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Kiểm tra giỏ hàng ' });
});

module.exports = router;