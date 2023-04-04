require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express()
const path = require("path")
const PORT = process.env.PORT || 8080;


// Middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes
app.get("/", async (req, res) => {
    try {
      res.json({
        status: 200,
        message: "Get data has successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  });
// app.use(require('./src/routes/index'))

// // Static content
// app.use(express.static(path.join(__dirname, '/src/views')))

app.listen(PORT, () => console.log(`Server is running in the port ${PORT}`));