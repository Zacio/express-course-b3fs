const express = require("express");
const dotenv = require("dotenv").config();
const color = require("colors")
const port = process.env.PORT || 5000;

const app = express();


// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded())

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
    console.log(`server start on ${port}`);
})