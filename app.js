/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express();

const routes = require('./routes/api/evidences');

// connect to DB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello world! Team assignment 1b');
});

app.use('/api/evidences', routes);

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log(`Serving running on port ${port}`);
})
