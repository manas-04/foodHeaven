import React from "react";
import { Form, Button } from "react-bootstrap";

import styles from "./forgotPass.module.css";

function FormAndSvg(){

    return <center className={styles.formCard}>
        <div style={{display:"inline-flex"}}>
            <img src="images/forgot-password-animate.svg" className={styles.image} alt="" />
            <div className={styles.form}>
                <h1>Forgot Your Password ?</h1>
                <p>No worries! Enter your email associated with your account and we'll send you a link to reset your password.</p>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>

                <Button style={{marginTop:10+"px"}} className={styles.forgotPassBtn}>
                    Send Request
                </Button>

                <p style={{marginTop:12+"px"}}>Don't have an account ? 
                    <a href="/register"> Sign Up</a>
                </p>
            </div>
        </div>
</center>
}

export default FormAndSvg;