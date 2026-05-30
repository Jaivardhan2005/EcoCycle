const express = require('express');
const router = express.Router();
const { registerUser, registerAgency, login } = require('../controllers/authController');

router.post('/register-user', registerUser);
router.post('/register-agency', registerAgency);
router.post('/login', login);

module.exports = router;
