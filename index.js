const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const buyerRoute = require('./routes/buyer')
const sellerRoute = require('./routes/seller')

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to db')).catch((err) => console.log(err));

app.use('/api', buyerRoute)
app.use('/api', sellerRoute)

app.listen('5000', () => {
    console.log('backend is running.');
})