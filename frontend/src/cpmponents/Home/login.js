import { useContext, useState } from "react";
import "../../css/login.css";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../context/context";

const Login = () => {
    const {setToken}=useContext(TokenContext)
    const [formData,setFormData]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    const submitForm=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post("/login",formData);
            console.log(response.data)
            const token=response.data.token;
            localStorage.setItem("token",token)
            setToken(token)
            navigate("/home")

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="formContainer">
                <div className="formPart">
                    <div className="formPart1">
                        <div
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "rgb(25 122 212)",
                                textAlign: "center",
                                marginTop:"10px"
                            }}
                        >
                            Login
                        </div>
                        <div className="formCon">
                            <form>
                                <div className="fieds">
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={handleChange} placeholder="Enter your name" />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password" name="passWord" onChange={handleChange} placeholder="Enter your name" />
                                    </div>
                                    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"7px"}}><Link style={{fontSize:"12px",color:"rgb(25 122 212)"}} to='/forgotPwd'>Forgot Password ?</Link></div>
                                </div>
                            </form>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "10px",
                            }}
                        >
                            <button onClick={submitForm} className="loginbtn" style={{ padding: "10px 20px" }}>
                                Submit
                            </button>
                        </div>
                        <div className="signup"><span style={{color:"rgb(25 122 212)",fontSize:"12px",margin:"10px 0"}}>Don't have an account ? <Link to="/register" style={{color:"rgb(25 122 212)",fontSize:"16px",fontWeight:"bold"}}>SignUp</Link></span></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
