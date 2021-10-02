import React, { useState } from "react";
import { Form , Row , Col , Button} from "react-bootstrap";

import styles from "./registerPage.module.css";

function SignUpForm(){

    const [userDetails,setUserDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    }); 

    function InputHandler(event){
        const {name,value} = event.target;
        console.log(name,value);

        setUserDetails((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        });
    }

    function formSubmission(event){
        event.preventDefault();
        console.log(userDetails);
    }
    
    return <center className={styles.formCard} >
    <div style={{display:"inline-flex"}}>
        <img src="images/mobile-login-animate.svg" className={styles.image} alt="" />
        <div className={styles.form}>
            <h1 style={{paddingBottom:6+"px"}}>Sign-Up</h1>
            <Form onSubmit={formSubmission}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="First Name" 
                            name="firstName"
                            onChange={InputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="Last Name"
                            name="lastName"
                            onChange={InputHandler}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="E-mail" 
                    name="email"    
                    onChange={InputHandler}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    placeholder="Password" 
                    type="password" 
                    name="password"    
                    onChange={InputHandler}
                />
                </Form.Group>

                <Button type="submit" className={styles.registerBtn}>
                    Sign Up
                </Button>

                <p style={{paddingTop:10+"px"}}>
                    Already Have an account ? 
                    <a href="/login"> Sign In</a>
                </p>
            </Form>
        </div>
    </div>
</center>
}

export default SignUpForm;