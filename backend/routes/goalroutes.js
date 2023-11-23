const express=require('express');
const router=express.Router();
const goalcontroller=require('../controllers/goal')


router.get('/',goalcontroller.getgoals)
router.post('/',goalcontroller.setgoals)
router.put('/:id',goalcontroller.updategoal)
router.delete('/:id',goalcontroller.deletegoal)

module.exports=router;
