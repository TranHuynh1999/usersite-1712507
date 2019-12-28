var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')
var controller= require('../controllers/user.controller')

/* GET home page. */
router.get('/', controller.home);

router.get('/about.html',controller.about);

router.get('/contact.html', controller.contact);

router.get('/checkout.html', controller.checkout);

router.get('/product.html', controller.product);

router.get('/shop.html', controller.shop);

router.get('/index.html', controller.home);

 /* GET sign-in page. */
router.get('/signin', controller.getSignin);

// Xử lý thông tin khi có người đăng nhập
router.post('/signin',controller.postSignin);

/* GET sign-up page. */
router.get('/signup',controller.getSignup);

/* Post sign-up page. */
// Xử lý thông tin khi có người đăng ký
router.post('/signup', 
[
  check('email', 'Your email is not valid').isEmail(),
  check('password','Mật khẩu ít nhất 6 ký tự.').isLength({ min: 6 })
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