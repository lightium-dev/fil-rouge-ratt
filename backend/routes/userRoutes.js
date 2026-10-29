const express = require('express');
const router = express.Router();
const { register, login, getUsers } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/users', authMiddleware, getUsers);

module.exports = router;