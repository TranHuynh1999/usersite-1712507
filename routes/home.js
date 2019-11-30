var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Trang chủ' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Giới thiệu '});
});
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Liên hệ '});
});

router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Kiểm tra giỏ hàng ' });
});


router.get('/product.html', function(req, res, next) {
  res.render('product', { title: 'Sản phẩm ' });
});
router.get('/shop.html', function(req, res, next) {
  res.render('shop', { title: 'Mua Ngay ' });
});



module.exports = router;