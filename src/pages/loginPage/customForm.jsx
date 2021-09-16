import React from "react";
import { Form , Button } from "react-bootstrap";
import { useHistory } from "react-router";
import style from "./loginPage.module.css";

function LoginForm(){

    const history = useHistory();

    function registerClickHandler(){
        history.push("/register");
    }

    function forgotPass(){
        history.push("/forgotPassword");
    }

    return <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <div className={style.forgotPassLink}>
        <a href="" onClick={forgotPass} > Forgot Password? </a>
    </div>
    <center>
        <Button type="submit" className={style.loginBtn}>
            Sign In
        </Button>
    </center>
    <div className={style.newAccountLink}>
        <p>   
            Not Registered yet ? 
            <a href= "" name="signUp" onClick={registerClickHandler}> Create an Account </a>
        </p>
        
    </div>
  
</Form>
}

export default LoginForm;