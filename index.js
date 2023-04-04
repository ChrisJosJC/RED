require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express()
const path = require("path")
const PORT = process.env.PORT || 4000;


// Middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes
app.use(require('./src/routes/index'))

// Static content
app.use(express.static(path.join(__dirname, '/src/views')))

app.listen(PORT)
console.log(`Starting server on ${PORT}...`);

module.exports = app