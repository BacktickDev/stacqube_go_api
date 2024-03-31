const subModuleController = require('../controllers/subModuleControllers');
const express = require('express');
const router = express.Router();


router.get('/', subModuleController.getSubModules);
router.post('/', subModuleController.createSubModule);
router.get('/:id', subModuleController.getSubModuleById);
router.put('/:id', subModuleController.updateSubModule);
router.delete('/:id', subModuleController.deleteSubModule);


module.exports = router;