const router = require('express').Router();
const BuyUser = require('../models/buyUser')

// JOIN
router.post('/buyer', async (req, res) => {
    try {
        const userEmail = await BuyUser.findOne({email: req.body.email})
        console.log(userEmail);
        if (userEmail) {
            res.status(500).json('you join the waitlist already')
        } else {
            const newUser = new BuyUser({
                fullName: req.body.fullName,
                email: req.body.email
            });
    
            const user = await newUser.save()
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router