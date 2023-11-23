const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/user')


router.post('/',usercontroller.registerUser);


module.exports=router;