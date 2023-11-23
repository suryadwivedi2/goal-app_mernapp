const asynchandler = require('express-async-handler');
const user = require('../model/usermodel');


exports.registerUser=async(req,res,next)=>{
    res.status(200).json({message:'user added'});
}