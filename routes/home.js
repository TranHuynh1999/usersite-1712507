var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')


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
router.get('/index.html', function(req, res, next) {
  res.render('home', { title: 'Trang chủ ' });
});
router.get('/homeUser', function(req, res, next) {
  res.render('homeUser', { title: 'Trang chủ của user ' });
});
 /* GET sign-in page. */
router.get('/signin', function(req, res, next) {
  // Hiển thị trang và truyển lại những tin nhắn từ phía server nếu có
  var messages = req.flash('error')
  res.render('signin',{ 
    messages: messages,
    hasErrors: messages.length > 0,
   })
});
/* Post sign-up page. */
// Xử lý thông tin khi có người đăng nhập
router.post('/signin',
//  [
//   check('email', 'Your email is not valid').isEmail(),
//   check('password', 'Your password must be at least 5 characters').isLength({ min: 5 })
//   ],
//   (function (req, res, next) {  
//   var messages = req.flash('error');
//   const result= validationResult(req);
//   var errors=result.errors;
//   if (!result.isEmpty()) {
//     var messages = [];
//     errors.forEach(function(error){
//         messages.push(error.msg);
//     });
//     res.render('signin',{
//       messages: messages,
//       hasErrors: messages.length > 0,
//     });
//   }else{
//      next();
//   }
//   }),
  passport.authenticate('local.signin', { successRedirect: '/homeUser',
                                  failureRedirect: '/signin',
                                  failureFlash: true })
);
/* GET sign-up page. */
router.get('/signup', function(req, res, next) {
  var messages = req.flash('error')
 
  res.render('signup',{ 
    messages: messages,
    hasErrors: messages.length > 0,
   })
});

/* Post sign-up page. */
// Xử lý thông tin khi có người đăng ký
router.post('/signup', 
[
  check('email', 'Your email is not valid').isEmail(),
  check('password', 'Your password must be at least 6 characters').isLength({ min: 6 })
  ],
  (function (req, res, next) {

  var messages = req.flash('error');
  const result= validationResult(req);
  var errors=result.errors;
  if (!result.isEmpty()) {
    var messages = [];
    errors.forEach(function(error){
        messages.push(error.msg);
    });
    res.render('signup',{
      messages: messages,
      hasErrors: messages.length > 0,
    });
  }else{
     next();
  }
  }),
  passport.authenticate('local.signup', { successRedirect: '/signin',
                                  failureRedirect: '/signup',
                                  failureFlash: true })
);
module.exports = router;