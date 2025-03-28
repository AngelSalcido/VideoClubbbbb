const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const genresRouter =  require('./routes/genres');
const actorsRouter =  require('./routes/actors');
const moviesRouter =  require('./routes/movies');
const directorsRouter =  require('./routes/directors');
const copiesRouter =  require('./routes/copies');
const membersRouter =  require('./routes/members');
const loansRouter =  require('./routes/loans');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/genres', genresRouter);
app.use('/actors', actorsRouter);
app.use('/movies', moviesRouter);
app.use('/copies', copiesRouter);
app.use('/members', membersRouter);
app.use('/loans', loansRouter);
app.use('/directors', directorsRouter);

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
