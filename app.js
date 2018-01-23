const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const validator = require('express-validator');
const flash = require('connect-flash');

// Routes
var index = require('./routes/index');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',  expressHbs({defaultLayout: 'layout', extename: '.hbs'}));
app.set('view engine', 'hbs');

// The features I need
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'anotherOneou812?',
    resave:false,
    saveUninitialized: false,
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(flash());

// Set static resource path
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes
app.use('/', index);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {err:res.locals.error, msg:res.locals.message, sta:res.status});
});

// Set port
app.set('port', (process.env.PORT || 2225));

// Initialize the server (app)
app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});