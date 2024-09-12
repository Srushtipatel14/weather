import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./cpmponents/Home/home";
import Weather from "./cpmponents/weather/weather";
import Navbar from "./cpmponents/Home/navbar";
import Footer from "./cpmponents/Home/footer";
import Login from "./cpmponents/Home/login";
import Register from "./cpmponents/Home/register";
import ForgotPwd from "./cpmponents/Home/forgotPwd";
import About from "./cpmponents/Home/about";
import { TokenProvider } from "./context/context";
const App = () => {
 return (
   <TokenProvider>
    <Router>
     <div className="app-container">
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path="/home" element={<Home />} />
         <Route path="/weather" element={<Weather />} />
         <Route path="/about" element={<About/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/forgotPwd" element={<ForgotPwd/>}></Route>
       </Routes>
     </main>
     <Footer/>
     </div>
   </Router>
   </TokenProvider>
 );
};

export default App;