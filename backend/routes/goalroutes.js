const express = require('express');
const router = express.Router();
const goalcontroller = require('../controllers/goal')
const authmiddlewware = require('../middleware/authMiddleware');

router.get('/', authmiddlewware.portect, goalcontroller.getgoals)
router.post('/', authmiddlewware.portect, goalcontroller.setgoals)
router.put('/:id', authmiddlewware.portect, goalcontroller.updategoal)
router.delete('/:id', authmiddlewware.portect, goalcontroller.deletegoal)

module.exports = router;
