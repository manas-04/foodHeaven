import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { useAlert } from 'react-alert';

import styles from "./registerPage.module.css";

function SignUpForm() {

    const history = useHistory();
    const alert = useAlert();
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isLoggedIn: false,
    });

    function InputHandler(event) {
        const { name, value } = event.target;

        setUserDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    async function formSubmission(event) {
        event.preventDefault();
        
        if (userDetails.password.length <= 7) {
            alert.error("Password should be of at least 8 characters.");
        } else {
            await axios.post(`/user/signUp`, {
                user: userDetails
            }).then((res) => {
                if (res.status === 200) {
                    alert.success(res.data.msg);
                    setTimeout(() => {
                        history.push('/login');
                    }, 2000);
                } else if (res.status === 201) {
                    alert.show(res.data.msg);
                }
            }).catch((error) => {
                if (error.response.status === 401) {
                    alert.error("Invalid Email or Password");
                } else if (error.response.status === 404) {
                    alert.error("User Not Found");
                } else if (error.response.error === 500) {
                    history.push("/error");
                }
            });
        }
    }

    return <center className={styles.formCard} >
        <div style={{ display: "inline-flex" }}>
            <img src="images/mobile-login-animate.svg" className={styles.image} alt="" />
            <div className={styles.form}>
                <h1 style={{ paddingBottom: 6 + "px" }}>Sign-Up</h1>
                <Form onSubmit={formSubmission}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="First Name"
                                name="firstName"
                                onChange={InputHandler}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={InputHandler}
                                required
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
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={InputHandler}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" className={styles.registerBtn}>
                        Sign Up
                    </Button>

                    <p style={{ paddingTop: 10 + "px" }}>
                        Already Have an account ?
                        <a href="/login"> Sign In</a>
                    </p>
                </Form>
            </div>
        </div>
    </center>
}

export default SignUpForm;