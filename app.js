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
app.use('/propertyTypes', require('./routes/propertyType'));
app.use('/users', require('./routes/user'));
app.use('/leaseTypes', require('./routes/leaseType'));
app.use('/amenitiess', require('./routes/amenities'));
app.use('/sharingTypes', require('./routes/sharingType'));
app.use('/rentalTypes', require('./routes/rentalType'));
app.use('/propertys', require('./routes/property'));
app.use('/unitss', require('./routes/units'));
app.use('/owners', require('./routes/owner'));
app.use('/assignPropertyToOwners', require('./routes/assignPropertyToOwner'));
app.use('/tenants', require('./routes/tenant'));
app.use('/assignPropertyToTenants', require('./routes/assignPropertyToTenant'));
app.use('/agreements', require('./routes/agreement'));
app.use('/bankAccounts', require('./routes/bankAccount'));
app.use('/notifys', require('./routes/notify'));
app.use('/salesGroups', require('./routes/salesGroup'));
app.use('/roless', require('./routes/roles'));

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
