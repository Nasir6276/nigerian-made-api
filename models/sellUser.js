const mongoose = require("mongoose");

const SellUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    businessName: {
        type: String, 
        default: ''
    },
    businessLocation: {
        type: String, 
        default: ''
    },
    businessType: {
        type: String, 
        default: ''
    },
    createAccount: {
        type: Boolean,
    }
}, { 
    timestamps: true
 })

module.exports = mongoose.model('SellUser', SellUserSchema)