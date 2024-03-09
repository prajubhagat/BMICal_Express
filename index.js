const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//home page hello world
app.get("/", (req, res)=> {
    res.send("hello calculator ");
});

// use h1 tag
app.get('/about', (req , res)=> {
    res.send("<h1>SUM and BMI</h1>");
})



//call calculator html file
app.get("/calculator", (req, res)=>{
    res.sendFile(__dirname+"/calculator.html");
});
//to send file on server
app.post("/calculator", (req,res)=>{
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    res.send("The sum of the two number is :" +sum);
});


//call bmi html file
app.get("/bmi", (req, res)=>{
    res.sendFile(__dirname+"/bmi.html");
});
//to calculate bmi
app.post("/bmi", (req, res)=>{
    let w = Number(req.body.weight);
    let h = Number(req.body.height);
    let bmi = w/ (h*h);
    res.send("The BMI of your body is:"+bmi);
});

app.listen(3000, () => {
    console.log("listing the port at 3000");
});