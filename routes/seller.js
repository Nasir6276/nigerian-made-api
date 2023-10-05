const router = require('express').Router();
const SellUser = require('../models/sellUser')

// JOIN
router.post('/seller', async (req, res) => {
    try {
        const userEmail = await SellUser.findOne({email: req.body.email})
        if (userEmail) {
            res.status(500).json('you join the waitlist already')
        } else {
            const newUser = new SellUser({
                fullName: req.body.fullName,
                email: req.body.email,
                businessName: req.body.businessName,
                businessLocation: req.body.businessLocation,
                businessType: req.body.businessType
            });
    
            const user = await newUser.save()
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router