var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')
var controller= require('../controllers/user.controller')

/* GET home page. */
router.get('/checkout.html', controller.checkout);

module.exports = router;