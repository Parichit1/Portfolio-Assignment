process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const { Router } = require('express');
var express = require('./config/express');
var app = express();
app.listen(1000);
module.exports = app;


console.log('Server running at http://localhost:1000');