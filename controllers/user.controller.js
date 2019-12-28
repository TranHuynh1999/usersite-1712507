var  passport = require('passport')
module.exports.about=function(req, res, next) {
    res.render('about', { title: 'Giới thiệu ' })};
module.exports.home=   function(req, res, next) {
    res.render('home', { title: 'Trang chủ' })};
module.exports.contact=function(req, res, next) {
        res.render('contact', { title: 'Liên hệ '})};
module.exports.checkout= function(req, res, next) {
    res.render('checkout', { title: 'Kiểm tra giỏ hàng ' })};
module.exports.product=function(req, res, next) {
  
    res.render('product', { title: 'Sản phẩm ' })};  
/* GET sign-in page. */    
module.exports.getSignin= function(req, res, next) {
    // Hiển thị trang và truyển lại những tin nhắn từ phía server nếu có
    var messages = req.flash('error')
    res.render('signin',{ 
      messages: messages,
      hasErrors: messages.length > 0,
     })
  };
// Xử lý thông tin khi có người đăng nhập
module.exports.postSignin=passport.authenticate('local.signin', { successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true });

    /* GET sign-up page. */
module.exports.getSignup=function(req, res, next) {
    var messages = req.flash('error')
   
    res.render('signup',{ 
      messages: messages,
      hasErrors: messages.length > 0,
     })};
  // Xử lý thông tin khi có người đăng ký

module.exports.shop=function(req, res, next) {
    res.render('shop', { title: 'Mua Ngay ' });
  };