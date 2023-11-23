const asynchandler=require('express-async-handler');

exports.getgoals=asynchandler(async(req,res,next)=>{
    res.status(200).json({message:"getgoals"})
})

exports.setgoals=asynchandler(async(req,res,next)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text file');
    }
    res.status(200).json({message:"getgoals"})
})

exports.deletegoal=asynchandler(async(req,res,next)=>{
    res.status(200).json({message:`delete goal${req.params.id}`})
})
exports.updategoal=asynchandler(async(req,res,next)=>{
    res.status(200).json({message:`updated goal${req.params.id}`})
})