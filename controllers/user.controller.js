var  passport = require('passport')
var User=require('../models/user.model');

/* GET sign-in page. */    
module.exports.getSignin= async function(req, res, next) {
    // Hiển thị trang và truyển lại những tin nhắn từ phía server nếu có
    var messages = req.flash('error')
    res.render('signin.ejs',{ 
      messages: messages,
      hasErrors: messages.length > 0,
     })

    //  res.cookie=('userID',user.id);
  };
// Xử lý thông tin khi có người đăng nhập
module.exports.postSignin= passport.authenticate('local.signin', { successRedirect: '/',
    failureRedirect: '/user/signin',
    failureFlash: true,
 });

    /* GET sign-up page. */
module.exports.getSignup=function(req, res, next) {
    var messages = req.flash('error')
   
    res.render('signup.ejs',{ 
      messages: messages,
      hasErrors: messages.length > 0,
     
     })};
  // Xử lý thông tin khi có người đăng ký
