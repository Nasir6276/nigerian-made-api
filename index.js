const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const buyerRoute = require('./routes/buyer')
const sellerRoute = require('./routes/seller')
const cors = require('cors')

const corsOptions ={
    origin:'https://nigerian-made.com', 
    credentials:true, 
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
dotenv.config();
app.use(express.json())

const uri = 'mongodb+srv://Nasir6276:Ni54562766@nasir.unkqket.mongodb.net/waitlist?retryWrites=true&w=majority'


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to db')).catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.json('app is running')
})
app.use('/api', buyerRoute)
app.use('/api', sellerRoute)

app.listen('5000', () => {
    console.log('backend is running.');
})