const companyBranchController = require('../controllers/companyBranchController');
const express = require('express');
const router = express.Router();


router.get('/', companyBranchController.getCompanyBranches);
router.post('/create', companyBranchController.createCompanyBranch);
router.put('/update/:id', companyBranchController.updateCompanyBranch);
router.delete('/delete/:id', companyBranchController.deleteCompanyBranch);


module.exports = router;