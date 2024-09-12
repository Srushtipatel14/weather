const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const { type } = require("os");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        trim:true,
        min:2,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    passWord:{
        type:String,
        require:true
    }
})

userSchema.method({
    async authenticate(password)
    {
        return bcrypt.compare(password,this.passWord)
    }
})

module.exports=mongoose.model("User",userSchema)