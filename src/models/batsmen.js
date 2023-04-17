const mongoose=require("mongoose");

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    points:{
        type:Number,
        required:true,
    },
    event:{
        type:String,
        default:"T20"
    },
})

const MensRanking=new mongoose.model("MenRanking",menSchema);

module.exports=MensRanking;