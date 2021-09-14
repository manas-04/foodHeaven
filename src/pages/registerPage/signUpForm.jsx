import React from "react";
import { Form , Row , Col , Button} from "react-bootstrap";
import { useHistory } from "react-router";

import styles from "./registerPage.module.css";

function SignUpForm(){

    const history = useHistory();

    function clickHandler(){
        history.push("/login");
    }

    return <center className={styles.formCard} >
    <h1 style={{paddingBottom:6+"px"}}>Sign-Up</h1>
    <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" type="password" />
        </Form.Group>

        <Button type="submit" className={styles.registerBtn}>
            Sign Up
        </Button>

        <p style={{paddingTop:10+"px"}}>
            Already Have an account ? 
            <a href=" " onClick={clickHandler}> Sign In</a>
        </p>

    </Form>
</center>
}

export default SignUpForm;