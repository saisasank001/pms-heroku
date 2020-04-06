var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/user', require('./routes/user'));
app.use('/amenities',require('./route/amenities'));
app.use('/backgroundVerificationStatus', require('./routes/backgroundVerificationStatus'));
app.use('/bankAccount', require('./routes/bankAccount'));
app.use('/leaseType', require('./routes/leaseType'));
app.use('/owner', require('./routes/owner'));
app.use('/property', require('./routes/property'));
app.use('/propertyToOwner', require('./routes/propertyToOwner'));
app.use('/propertyToTenant', require('./routes/propertyToTenant'));
app.use('/propertyType', require('./routes/propertyType'));
app.use('/rentalType', require('./routes/rentalType'));
app.use('/role', require('./routes/role'));
app.use('/sharingType', require('./routes/sharingType'));
app.use('/tenant', require('./routes/tenant'));
app.use('/units', require('./routes/units'));


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
