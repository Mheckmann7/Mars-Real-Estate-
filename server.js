const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
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
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/', indexRouter);
app.use('/plots', plotsRouter);
app.use('/', usersRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`); 
})