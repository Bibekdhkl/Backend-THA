var createError = require('http-errors');
//to handle http errors
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//to collect datas from cookies of frontend
var logger = require('morgan');
//like console.log

//this are the files inside routes folder
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//adding in middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//all the static files will be stored inside static folder
//if we want to display by directly using path also we use static that means we can display public>stylesheets>style.css by using the path => http://localhost:3000/stylesheets/style.css. Here upto public it can automatically detect the path

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
