const permissionController = require('../controllers/permissionController');
const express = require('express');
const router = express.Router();


router.get('/', permissionController.getPermissions);
router.post('/', permissionController.createPermission);
router.get('/:id', permissionController.getPermissionById);
router.put('/:id', permissionController.updatePermission);
router.delete('/:id', permissionController.deletePermission);


module.exports = router;