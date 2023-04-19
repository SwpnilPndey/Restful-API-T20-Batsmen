const express=require("express");
const app=express();

const cors=require("cors");
app.use(cors());


const port=process.env.PORT||3000;

require("./db/conn");

const MensRanking=require("./models/batsmen");

const router=require("./routers/men");

app.use(express.json());

app.use(router);






app.listen(port,()=>{
    console.log(`Connection is successful to the webserver`);
})