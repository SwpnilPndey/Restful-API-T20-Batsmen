const express=require("express");
const app=express();

// const port=3000;
const port=process.env.PORT;

require("./db/conn");

const MensRanking=require("./models/batsmen");

const router=require("./routers/men");

app.use(express.json());

app.use(router);


app.listen(port,()=>{
    console.log(`Connection is successful at ${port} port`);
})