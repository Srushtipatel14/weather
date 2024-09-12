require('dotenv').config();
const path=require("path")
require("./dbConnection");
const port=process.env.PORT;
const express=require("express");
const cors=require("cors")

const {registerUser,loginUser}=require("./function")

const app=express();
app.use(cors());
app.use(express.json());


app.post("/register",registerUser);
app.post("/login",loginUser);

app.listen(port,()=>{
    console.log(`your program is running on port ${port}`)
    })

const pathToBuild=path.resolve(__dirname, "../frontend/build")
app.use(express.static(pathToBuild));
app.get("*",(req,res) => {
  
    res.sendFile(path.resolve(pathToBuild,"index.html"));
})

