module.exports.about=function(req, res, next) {
    res.render('about', { title: 'Giới thiệu ' })};
module.exports.home=   function(req, res, next) {
    res.render('home', { title: 'Trang chủ' })};
module.exports.contact=function(req, res, next) {
        res.render('contact', { title: 'Liên hệ '})};
module.exports.checkout= function(req, res, next) {
    res.render('checkout', { title: 'Kiểm tra giỏ hàng ' })};

