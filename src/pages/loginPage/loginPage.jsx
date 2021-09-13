import React from "react";
import ImageSlider from "./imageSlider";
import style from "./loginPage.module.css";
import CustomForm from "./customForm";

function Login(){
   return <div className={style.completePage}>
        <ImageSlider />
        <div className={style.loginArea}>
            <p style={{marginBottom:-6 + "px"}}>Welcome Back</p>
            <h1 style={{marginBottom:13 + "px"}}>Login to your Account</h1>
            <CustomForm />
        </div>
   </div>
}

export default Login;