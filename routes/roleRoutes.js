const RoleController = require('../controllers/roleController');
const express = require('express');
const router = express.Router();


router.get('/', RoleController.getRoles);
router.post('/', RoleController.createRole);
router.get('/:id', RoleController.getRoleById);


module.exports = router;