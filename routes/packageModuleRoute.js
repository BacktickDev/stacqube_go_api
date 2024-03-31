const packageModuleController = require('../controllers/packageModuleController');
const express = require('express');
const router = express.Router();


router.get('/', packageModuleController.getPackageModules);
router.post('/', packageModuleController.createPackageModule);
router.get('/:id', packageModuleController.getPackageModuleById);
router.put('/:id', packageModuleController.updatePackageModule);
router.delete('/:id', packageModuleController.deletePackageModule);


module.exports = router;