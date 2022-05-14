import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { useAlert } from 'react-alert';

import styles from "./forgotPass.module.css";

function FormAndSvg(){

    const history = useHistory();
    const alert = useAlert();
    const [userDetails,setUserDetails] = useState({
        email:""
    }); 

    function InputHandler(event){
        const {name,value} = event.target;

        setUserDetails((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        });
    }

    async function formSubmission(event){
        event.preventDefault();

        await axios.post(`user/forgotPassword`,{
            user:userDetails
        }).then((res)=>{
            console.log(res.status);
            if(res.status == 200){
                alert.success(res.data.msg);
            }
        }).catch((error) => {
            console.log(error);    
            if(error.response.status == 404){
                alert.error(error.response.data.msg);
            }else{
                history.push("/error");
            } 
        });
    }   

    return <center className={styles.formCard}>
        <div style={{display:"inline-flex"}}>
            <img src="images/forgot-password-animate.svg" className={styles.image} alt="" />
            <div className={styles.form}>
                <h1>Forgot Your Password ?</h1>
                <p>No worries! Enter your email associated with your account and we'll send you a link to reset your password.</p>

                <Form onSubmit={formSubmission}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={InputHandler}/>
                    </Form.Group>


                <Button style={{marginTop:10+"px"}} className={styles.forgotPassBtn} type="submit">
                    Send Request
                </Button>

                </Form>

                <p style={{marginTop:12+"px"}}>Don't have an account ? 
                    <a href="/register"> Sign Up</a>
                </p>
            </div>
        </div>
</center>
}

export default FormAndSvg;