const rolePermissionController = require('../controllers/rolePermissionController');
const express = require('express');
const router = express.Router();


router.get('/', rolePermissionController.getRolePermissions);
router.post('/', rolePermissionController.createRolePermission);
router.get('/:id', rolePermissionController.getRolePermissionById);
router.put('/:id', rolePermissionController.updateRolePermission);
router.delete('/:id', rolePermissionController.deleteRolePermission);


module.exports = router;