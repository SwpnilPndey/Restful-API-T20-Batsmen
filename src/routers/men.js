const express=require("express");
const router=new express.Router();
const MensRanking=require("../models/batsmen");



router.post("/",async(req,res)=> {
    try {
        const addingRecords=new MensRanking(req.body);
        const saveRecords=await addingRecords.save();
        res.status(201).send(saveRecords);
               
    } catch (error) {
        res.status(400).send(error);        
    }
})


router.get("/",async(req,res)=> {
    try {
        const getMens= await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);             
    } catch (error) {
        res.status(400).send(error);        
    }
})

router.get("/:id",async(req,res)=> {
    try {
        const _id=req.params.id;
        const getMen= await MensRanking.findById({_id:_id});
        res.send(getMen);             
    } catch (error) {
        res.status(400).send(error);        
    }
})

router.patch("/:id",async(req,res)=> {
    try {
        const _id=req.params.id;
        const getMen= await MensRanking.findByIdAndUpdate({_id:_id},req.body,{new:true});
        res.send(getMen);             
    } catch (error) {
        res.status(500).send(error);        
    }
})

router.delete("/:id",async(req,res)=> {
    try {
        const _id=req.params.id;
        const getMen= await MensRanking.findByIdAndDelete({_id:_id});
        res.send(getMen);             
    } catch (error) {
        res.status(500).send(error);        
    }
})


module.exports=router; 
