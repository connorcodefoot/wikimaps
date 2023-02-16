// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}))

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const mapsEditRoutes = require ('./routes/maps-edit')
const pointRoutes = require('./routes/points')
const mapRoutes = require('./routes/maps')
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const registerRoutes = require('./routes/register');
const login = require('./routes/login');
const indexRoute = require('./routes/index')
const pointsDelete = require('./routes/points-delete')
const pointsEdit = require('./routes/points-edit.js')
const profile = require('./routes/profile')


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api
app.use('/', indexRoute)
app.use('/maps', mapRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/register', registerRoutes);
app.use('/login', login);
app.use('/points', pointRoutes)
app.use('/maps/edit/', mapsEditRoutes)
app.use('/points/delete', pointsDelete)
app.use('/points/edit', pointsEdit)
app.use('/profile', profile )

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
