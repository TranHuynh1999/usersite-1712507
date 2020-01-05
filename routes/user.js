var express = require('express');
var router = express.Router();
var controllerUser= require('../controllers/user.controller')
const { check, validationResult } = require('express-validator');
var  passport = require('passport')
/* GET sign-in page. */
router.get('/signin', controllerUser.getSignin);

// Xử lý thông tin khi có người đăng nhập
router.post('/signin',controllerUser.postSignin);

/* GET sign-up page. */
router.get('/signup',controllerUser.getSignup);

/* Post sign-up page. */
// Xử lý thông tin khi có người đăng ký
router.post('/signup', 
[
  check('email', 'Email không tồn tại').isEmail(),
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
    res.render('signup.ejs',{
      messages: messages,
      hasErrors: messages.length > 0,
    });
  }else{
     next();
  }
  }),
  passport.authenticate('local.signup', { successRedirect: '/user/signin',
                                  failureRedirect: '/user/signup',
                                  failureFlash: true })
);
module.exports = router;