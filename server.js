const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000;

require('dotenv').config(); 

const app = express();



require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const plotsRouter = require('./routes/plots')
const usersRouter = require('./routes/users');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/', plotsRouter);
app.use('/', usersRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`); 
})