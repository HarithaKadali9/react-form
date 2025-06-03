const express = require('express');
const authRouter = express.Router();
const Business= require('../models/schema');
authRouter.post('/form', async(req, res) => {
    try{
        const {businessType, targetAudience, sellingPoint, templateSelection} = req.body;
        console.log(req.body);
        const business=await new Business({
            businessType,
            targetAudience,
            sellingPoint,
            templateSelection
        });
        await business.save();
        console.log("Business created successfully");
        res.json({message: 'Business created successfully'});
    }catch(err){
        res.status(400).json({error: err.message});
    }
 })
 module.exports = authRouter;