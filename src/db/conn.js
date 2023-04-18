const mongoose=require("mongoose");

require("dotenv").config();

// const mongoConnect="mongodb://localhost:27017/cricket";
const mongoConnect=process.env.MONGO_URI;

mongoose.connect(mongoConnect,{
    useNewUrlParser:true,
   }).then(()=>{
    console.log(`Connection to database is successful`);
}).catch((error)=>{
    console.log(error);
})

