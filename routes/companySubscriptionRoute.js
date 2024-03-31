
const companySubscriptionController = require('../controllers/companySubscriptionController');
const express = require('express');
const router = express.Router();


router.get('/', companySubscriptionController.getCompanySubscriptions);
router.post('/', companySubscriptionController.createCompanySubscription);
router.get('/:id', companySubscriptionController.getCompanySubscriptionById);
router.put('/:id', companySubscriptionController.updateCompanySubscription);
router.delete('/:id', companySubscriptionController.deleteCompanySubscription);


module.exports = router;