const subscriptionPackageController = require('../controllers/subscriptionPackageCOntroller');
const express = require('express');
const router = express.Router();


router.get('/', subscriptionPackageController.getSubscriptionPackages);
router.post('/', subscriptionPackageController.createSubscriptionPackage);
router.get('/:id', subscriptionPackageController.getSubscriptionPackageById);
router.put('/:id', subscriptionPackageController.updateSubscriptionPackage);
router.delete('/:id', subscriptionPackageController.deleteSubscriptionPackage);


module.exports = router;