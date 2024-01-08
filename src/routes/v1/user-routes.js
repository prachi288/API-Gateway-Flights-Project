const express = require('express');
const {UserController}=require('../../controllers');
const router = express.Router();
console.log("Inside Routes");
router.post('/signup',UserController.signup);
router.post('/signin',UserController.signin);

module.exports = router;