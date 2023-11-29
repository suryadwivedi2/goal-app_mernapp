const jwt = require('jsonwebtoken');
const User = require('../model/usermodel');
const asynchandler = require('express-async-handler');


exports.portect = asynchandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from headers
            token = req.headers.authorization.split(' ')[1];

            //verifying token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from the token
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('NOT AUTHORISED')
        }

    }

    if (!token) {
        res.status(401)
        throw new Error('NOT AUTHORISED NO TOKEN DETECTED');
    }

})

