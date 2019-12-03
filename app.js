var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session')
var app = express();
var url1= "mongodb+srv://admin:admin@user-1712507-hgdqg.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url1, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}).then(
	() => {
		console.log('KN THANH CONG')
		let Customer = module.exports = mongoose.model("san_pham", sp_Schema, "san_pham");
		Customer.find({}).exec(function (err, rs) {
			if (err) {
				console.log("LOI~~ nua roi");
			} else {
				console.log('KN COLLECTION THANH CONG')
				console.log(rs);
			}
		});


	},
	err => { /** handle initial connection error */
		console.log('KNOI loi~');
	}
);


app.use(session({
  secret: 'adsa897adsa98bs',
  resave: false,
  saveUninitialized: false,
  }))
  app.use(flash());
  app.use(passport.initialize())
  app.use(passport.session());

  require('./config/passport'); // pass passport for configuration
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/about.html', require('./routes/about'))  ;
app.use('/contact.html',require('./routes/contact'));
app.use('/',require('./routes/home'));
app.use('/index.html',require('./routes/home'));
app.use('/product.html', require('./routes/product'));
app.use('/checkout.html',require('./routes/checkout'));
app.use('/shop.html',require('./routes/shop'));
//conect to db


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
