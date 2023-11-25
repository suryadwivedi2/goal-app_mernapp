const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user')


router.post('/', usercontroller.registerUser);
router.post('/login', usercontroller.loginUser);
router.post('/me', usercontroller.getMe);


module.exports = router;