var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var mongoose=require("mongoose")
const dev_db_url = 'mongodb://localhost:27017/pms';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}, function(err) {
    if (!err) {
        console.log(`Db Connected`)
    }
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
<<<<<<< HEAD
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
=======
app.use('/user', require('./routes/user'));
app.use('/amenities',require('./routes/amenities'));
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

>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e

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
