const express=require('express');
const stripeBackendcontroll =require('./../controll/stripeBackendcontroll');

const router= express.Router();

router.post('/backend', stripeBackendcontroll);


module.exports=router;