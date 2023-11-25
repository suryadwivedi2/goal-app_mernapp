const asynchandler = require('express-async-handler');
const User = require('../model/usermodel');
const bcrypt = require("bcryptjs")
const Jwt = require('jsonwebtoken');
require('dotenv').config();
//genertae token function

function generatetoken(id) {
    return Jwt.sign({ id }, process.env.JWT_SECRET)
}


exports.registerUser = asynchandler(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please add field');
    }
    //check if user exist
    const userexits = await User.findOne({ email: email })
    if (userexits) {
        res.status(400)
        throw new Error('user already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //create user

    const user = await User.create({
        name: name,
        email: email,
        password: hashedpassword,
        token: generatetoken(user.id)
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid user data');
    }

})


exports.loginUser = asynchandler(async (req, res, next) => {
    const { email, password } = req.body;

    //check if user exist
    const user = await User.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generatetoken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('invalid credentials');
    }
})


exports.getMe = asynchandler(async (req, res, next) => {
    res.status(200).json({ message: 'user data' });
})