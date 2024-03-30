const UserController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);


module.exports = router;