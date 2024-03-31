const modeulesController = require('../controllers/moduleController');
const express = require('express');
const router = express.Router();

router.get('/', modeulesController.getModules);
router.post('/', modeulesController.createModule);
router.put('/:id', modeulesController.updateModule);
router.delete('/:id', modeulesController.deleteModule);


module.exports = router;