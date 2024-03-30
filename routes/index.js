
const express = require('express');
const router = express.Router();

const companyRoute = require('./companyRoute');
const roleRoute = require('./roleRoutes');
const userRoute = require('./userRoute');

router.use('/company', companyRoute);
router.use('/role', roleRoute);
router.use('/user', userRoute);


module.exports = router;