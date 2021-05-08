const express =require('express');
const useview =require('./../controll/userview');
const router=express.Router();

router.get('/frontend', useview.striprFrontend);

module.exports= router;