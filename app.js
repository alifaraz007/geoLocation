const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/stores', require('./routes/stores'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app running on ${process.env.NODE_ENV} mode at ${process.env.PORT}`)
});