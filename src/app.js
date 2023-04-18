const express=require("express");
const app=express();


const port=process.env.PORT||3000;

require("./db/conn");

const MensRanking=require("./models/batsmen");

const router=require("./routers/men");

app.use(express.json());

app.use(router);


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});




app.listen(port,()=>{
    console.log(`Connection is successful to the webserver`);
})