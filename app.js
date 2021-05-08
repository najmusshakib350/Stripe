const path = require('path');
const express = require('express');
const stripeBackendroute=require('./route/stripeBackendroute');
const viewroute=require('./route/viewroute');


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// For frontend stripe payment gateway implementation route
app.use('/', viewroute);

//For  backend stripe payment gateway implementation route
app.use('/stripe/', stripeBackendroute);

module.exports = app;