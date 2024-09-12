require("dotenv").config();
const User=require("./models/userSchema");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const registerUser = async (req, res) => {
  try {
    const {userName,email,passWord} = req.body;

    const hash_password=await bcrypt.hash(passWord,10);
    const data={
      userName:userName,email:email,passWord:hash_password
    }
    const user=await User.findOne({email:email});
    if(user)
    {
      return res.status(400).json({
        message:"User already registered"
      })
    }
    else
    {
      User.create(data).then((result,err)=>{
        if(err)
        {
          console.log(err);
        }
        else
        {
          res.status(200).json({message:"User registered successfully"});
        }
      })
    }

  } catch (error) {
    console.log(error)
  }
};

const loginUser=async(req,res)=>{
try {
  const {email,passWord}=req.body;
  if(!email){res.status(400).json({message: "Please enter email"})}

  if(!passWord){res.status(400).json({message: "Please enter password"})}

  const user=await User.findOne({email:email});
  if(user)
  {
    const isValid=await user.authenticate(passWord);
    if(isValid){
      const token=jwt.sign(
        {_id:user._id},
        process.env.JWT_SECRET,{expiresIn:"1d"}
      );
      res.status(200).json({token})
    }
    else
    {
      res.status(401).json({
        message: "Incorrect Password",
     });
    }
  }
  else{
    res.status(400).json({
      message: "User does not exist",
   });

  }



} catch (error) {
  console.log(error)
}
}

module.exports = { registerUser,loginUser };
