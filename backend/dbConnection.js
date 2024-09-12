require("dotenv").config();
const mongoose= require("mongoose");
const DB=process.env.DB;

mongoose.connect(DB).then(()=>{
    console.log(`Database connected successfully`);
}).catch((err)=>{
    console.log("Error is:",err);
})
