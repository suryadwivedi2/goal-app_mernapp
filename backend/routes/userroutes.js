const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user')
const authmidd = require('../middleware/authMiddleware');

router.post('/', usercontroller.registerUser);
router.post('/login', usercontroller.loginUser);
router.post('/me', authmidd.portect, usercontroller.getMe);


module.exports = router;