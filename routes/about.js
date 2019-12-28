var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var  passport = require('passport')
var controller= require('../controllers/user.controller')

/* GET home page. */
router.get('/about.html', controller.about);

module.exports = router;
