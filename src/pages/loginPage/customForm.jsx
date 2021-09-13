import React from "react";
import { Form , Button } from "react-bootstrap";
import style from "./loginPage.module.css";

function LoginForm(){
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
        <a href="" > Forgot Password? </a>
    </div>
    <Button type="submit" className={style.loginBtn}>
        Login Now
    </Button>
  
</Form>
}

export default LoginForm;