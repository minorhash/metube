var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var type= require('./routes/type');
var res= require('./routes/res');

var add= require('./routes/add');
var add2= require('./routes/add2');
var edit= require('./routes/edit');
var edit2= require('./routes/edit2');
var del= require('./routes/del');
var del2= require('./routes/del2');

app.use('/', indexRouter);
app.use('/', type);
app.use('/', res);

app.use('/', add);
app.use('/', add2);
app.use('/', edit);
app.use('/', edit2);
app.use('/', del);
app.use('/', del2);

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
