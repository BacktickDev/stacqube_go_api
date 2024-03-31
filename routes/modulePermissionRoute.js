
const ModulePermissionController = require('../controllers/modulePermissionController');
const express = require('express');
const router = express.Router();

router.get('/', ModulePermissionController.getModulePermissions);
router.post('/', ModulePermissionController.createModulePermission);
router.get('/permissions/:moduleId', ModulePermissionController.getModulePermissionsByModuleId);

module.exports = router;