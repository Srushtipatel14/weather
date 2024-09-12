import { useState } from "react";
import "../../css/login.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData,setFormData]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))                                                                                         
    }

    const submitForm=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post('/register',formData);
            console.log(response);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="formContainer">
                <div className="formPart">
                <div className="formPart1">
                <div style={{fontSize:"2rem",fontWeight:"bold",color:"rgb(25 122 212)",textAlign:"center",marginTop:"10px"}}>Register</div>
                <div className="formCon">
                <form>
                    <div className="fieds">
                        <div className="field">
                            <label>UserName</label>
                            <input name="userName" onChange={handleChange} type="text" placeholder="Enter your name" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input name="email" onChange={handleChange} type="email" placeholder="Enter your name" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input name="passWord" onChange={handleChange} type="password" placeholder="Enter your name" />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input name="cpassWord" onChange={handleChange} type="password" placeholder="Enter your name" />
                        </div>
                    </div>
                </form>
                </div>
                <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
                    <button onClick={submitForm} className="loginbtn" style={{padding:"10px 20px",marginBottom:"10px"}}>Submit</button>
                </div>
                <div className="signup"><span style={{color:"rgb(25 122 212)",fontSize:"12px",margin:"10px 0"}}>Have you already an account ? <Link to="/login" style={{color:"rgb(25 122 212)",fontSize:"16px",fontWeight:"bold"}}>SignIn</Link></span></div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Register;
