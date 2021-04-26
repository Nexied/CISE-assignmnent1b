const express = require("express");
const connectDB = require('./config/db');

const app = express();

const routes = require('./routes/api/evidences');

app.use('/api/evidences', routes);

//connect to DB 
connectDB();

app.get('/', (req, res) => {
    res.send("Hello world! Team assignment 1b");
});

const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`Serving running on port ${port}`);
})
