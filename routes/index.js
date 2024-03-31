
const express = require('express');
const router = express.Router();

const companyRoute = require('./companyRoute');
const roleRoute = require('./roleRoutes');
const userRoute = require('./userRoute');
const moduleRoute = require('./modulesRoute');
const companyBranchRoute = require('./companyBranchRoute');
const companySubscriptionRoute = require('../routes/companySubscriptionRoute')
const subModuleRoute = require('./subModuleRoute');
const rolePermissionRoute = require('./role-permissionRoute');
const packageModuleRoute = require('./packageModuleRoute');
const subscriptionPackageRoute = require('./subscriptionPackageRoute');
const permissionRoute = require('./permissionRoute');

router.use('/company', companyRoute);
router.use('/role', roleRoute);
router.use('/user', userRoute);
router.use('/module', moduleRoute);
router.use('/companyBranch', companyBranchRoute);
router.use('/companySubscription', companySubscriptionRoute);
router.use('/subModule', subModuleRoute);
router.use('/rolePermission', rolePermissionRoute);
router.use('/packageModule', packageModuleRoute);
router.use('/subscriptionPackage', subscriptionPackageRoute);
router.use('/permission', permissionRoute);




module.exports = router;