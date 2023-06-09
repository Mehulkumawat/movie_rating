var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

async function signUpRequestHandler(req, res, next) {
    const {name, email, password} = req.body;
    if(!email && !password) {
        res.status(400).json({message: "Email and password are required."})
    }

    const userExists = await User.findOne(email);
    if(userExists){
        res.status(409).json({message:"Email already exists."});
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({name: name, email: email, password: encryptedPassword});
    await user.save();

    // bcrypt endcode the password and  can also match the encoded password with original password
    // here we are trying to encode password to an encrypted password

    const token = jwt.sign({userId: user_id}, process.env.JWT_SECRET);
    res.send({token});
}
router.post('/', signUpRequestHandler);

module.exports = router;      
