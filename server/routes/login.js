var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

async function loginRequestHandler(req, res, next) {
    const {email, password} = req.body;

    const user = await User.findOne(email);
    if(!user){
        res.status(401).json({message:"Invalid email or password"});
    }
    const encryptedPassword = user.password;
    // bcrypt endcode the password and  can also match the encoded password with original password
    // here we are trying matching encoded password with original password
    
    const passwordMatch = await bcrypt.compare(password, encryptedPassword);
    if(!passwordMatch) {
        res.status(401).json({message:"Invalid email or password"});
    }
    const token = jwt.sign({userId: user_id}, process.env.JWT_SECRET);
    res.send({token});
}
router.post('/', loginRequestHandler);

module.exports = router;      
