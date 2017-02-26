// Application starting poin
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// Application setup
// any incoming request will be passed into both morgan and bodyParser through 'use' keyword.
app.use(morgan('combined')); // logging middleware
app.use(bodyParser.json({ type: '*/*'})); // used to parse incoming requests
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // http - native node library
server.listen(port);
console.log('Server listening on: ', port);
