var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Liên hệss ' });
});

module.exports = router;