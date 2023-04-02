require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express()
const path = require("path")

// Middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

// Static content
app.use(express.static(path.join(__dirname, 'views')))

app.listen(3000)
console.log("Starting server...");
