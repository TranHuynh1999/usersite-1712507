var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/product.html', function(req, res, next) {
  res.render('product', { title: 'Sản phẩm ' });
});

  
  
  
  
module.exports = router;
