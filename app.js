const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const routes = require('./routes/index');
const auth = require('./routes/auth')
const dashboard = require('./routes/dashboard');
const patient = require('./routes/patient');
const record = require('./routes/record');

const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const ModelInstitution = require('./models/institution')

const app = express();


// MONGODB AND MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mediary')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))
// -----------------------------------------------------------------------------
// ROUTE AND PASSPORT CONFIGURATION
// -----------------------------------------------------------------------------

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 6000000
  }
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/', routes);
app.use('/auth', auth);
app.use('/dashboard', dashboard);
app.use('/dashboard/patient', patient);
app.use('/dashboard/patient/record', record);


passport.use(new LocalStrategy(ModelInstitution.authenticate()))

// BIND PASSPORT WITH USER MODEL (PASSPORT-LOCAL-MONGOOSE)
passport.serializeUser(ModelInstitution.serializeUser())
passport.deserializeUser(ModelInstitution.deserializeUser())


// -----------------------------------------------------------------------------
// MISC CONFIGURATION
// -----------------------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to ModelInstitution
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
