const express=require("express");
const app=express();
const port=process.env.PORT||3000;
require("../src/db/conn");
const MensRanking=require("../src/models/batsmen");
const router=require("./routers/men");

app.use(express.json());

app.use(router);



// app.get("/",async (req,res)=>{
//     res.send("Hello from Swapnil");
// })




app.listen(port,()=>{
    console.log(`Connection is successful at ${port} port`);
})