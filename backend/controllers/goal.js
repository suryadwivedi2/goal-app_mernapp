const asynchandler = require('express-async-handler');
const Goal = require('../model/goalmodel');
const User = require('../model/usermodel');



exports.getgoals = asynchandler(async (req, res, next) => {
    const goal = await Goal.find({user:req.user.id});
    res.status(200).json(goal)
})

exports.setgoals = asynchandler(async (req, res, next) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add text file');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

exports.deletegoal = asynchandler(async (req, res, next) => {
    const deletedgoal = await Goal.findById(req.params.id);

    if (!deletedgoal) {
        res.status(400)
        throw new Error('goal not found')
    } else {
        await Goal.deleteOne({ _id: req.params.id });
    }
    res.status(200).json(deletedgoal)
})


exports.updategoal = asynchandler(async (req, res, next) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('goal not found')
    }

    //check for user
const user=await User.findById(req.user.id);
if(!user){
    res.status(401)
    throw new Error("NOT AUTHORISED")
}

//check for user
if(user.id!==goal.user.toString()){
       res.status(401)
       throw new Error('NOT AUTHORISED')
}
    const updatedgoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedgoal);
})