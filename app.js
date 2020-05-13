var base64Img = require('base64-img');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors')
var mongoose=require("mongoose")
const dev_db_url = 'mongodb+srv://admin:admin@cluster0-lujhw.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';

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

app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/propertyType', require('./routes/propertyType'));
app.use('/user', require('./routes/user'));
app.use('/leaseType', require('./routes/leaseType'));
app.use('/amenities', require('./routes/amenities'));
app.use('/sharingType', require('./routes/sharingType'));
app.use('/rentalType', require('./routes/rentalType'));
app.use('/property', require('./routes/property'));
app.use('/units', require('./routes/units'));
app.use('/owner', require('./routes/owner'));
app.use('/propertyToOwner', require('./routes/assignPropertyToOwner'));
app.use('/tenant', require('./routes/tenant'));
app.use('/propertyToTenant', require('./routes/assignPropertyToTenant'));
app.use('/agreements', require('./routes/agreement'));
app.use('/bankAccount', require('./routes/bankAccount'));
app.use('/notify', require('./routes/notify'));
app.use('/salesGroup', require('./routes/salesGroup'));
app.use('/role', require('./routes/roles'));
app.use('/backgroundVerificationStatus', require('./routes/backgroundVerificationStatus'));

app.get('/icons', function(req, res) {
  res.json([{
      icon: 'fa fa-home',
      name: 'Home'
  }, {
      icon: 'fa fa-heart',
      name: 'heart'
  }, {
      icon: 'fa fa-star',
      name: 'star'
  }, {
      icon: 'fa fa-lock',
      name: 'lock'
  }, {
      icon: 'fa fa-flag',
      name: 'flag'
  }, {
      icon: 'fa fa-tag',
      name: 'tag'
  }]);
})

app.post('/Image/uploadImage',function(req,res){
    let tmp=new Date().getTime();
    var filepath = base64Img.img(req.body.photo, './public/', tmp, function(err, filepath) {
        console.log(err)
        console.log(filepath)
        res.send({
            error:err,
            success:filepath.replace('public\\','')
        })
    });
    
    // console.log(filepath)
    // res.send({success:'2.png'})
})

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
