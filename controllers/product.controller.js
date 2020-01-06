var Product=require('../models/typeproduct');
var products=require('../models/product')
module.exports.product= async function(req, res,next) {
    const allproducts = await products.find({});
    console.log(allproducts);
    res.render('product.ejs',{title:'Sản phẩm', products:allproducts })};

module.exports.inforProduct=function(req, res) { // ham index de vao web chinh
    res.render('single.ejs',{title: 'Thông tin chi tiết'});
};