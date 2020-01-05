var Product=require('../models/product');
module.exports.product= async function(req, res,next) {
     const allproducts = await Product.find({}).limit(5);
    console.log(allproducts);
    res.render('product.ejs',{title:'Sản phẩm', products:allproducts })};

