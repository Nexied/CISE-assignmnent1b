require("dotenv").config({path: "./config.env"});
const express = require("express");
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const app = express();

const routes = require('./routes/api/evidences');

//connect to DB 
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//     res.send("Hello world! Team assignment 1b");
// });

app.use('/api/evidences', routes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send("Api running");
    });
}

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Serving running on port ${port}`);
})
