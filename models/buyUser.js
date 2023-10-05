const mongoose = require("mongoose");

const BuyUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { 
    timestamps: true
 })

module.exports = mongoose.model('BuyUser', BuyUserSchema)