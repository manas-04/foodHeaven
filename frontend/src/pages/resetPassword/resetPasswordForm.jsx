import React, { useState } from "react";
import styles from "./resetPass.module.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useAlert } from 'react-alert';

function ResetPasswordForm() {

    const history = useHistory();
    const alert = useAlert();
    const { resetToken } = useParams();
    const [userDetails, setUserDetails] = useState({
        New_Password: "",
        Confirm_Password: ""
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

        await axios.post(`resetPassword`, {
            resetToken: resetToken,
            user: userDetails,
        }).then((res) => {
            if (res.status === 200) {
                alert.success(res.data.msg);
                setTimeout(() => {
                    history.push("/login");
                }, 2000);
            }
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                alert.error(error.response.data.msg);
            }
            else if (error.response.status === 408) {
                alert.error(error.response.data.msg);
                setTimeout(() => {
                    history.push("/forgotPassword");
                }, 2000);
            }
            else {
                history.push("/error");
            }
        });
    }

    return <div className={styles.mainDiv}>
        <div className={styles.heading}>
            <h1 style={{ marginTop: "10px" }}>Reset Password</h1>
            <h5 style={{ marginBottom: "20px", marginTop: "20px" }}>Your new Password must be different from previous used passwords.</h5>
        </div>
        <div style={{ display: "inline-flex" }}>
            <img src="https://stories.freepiklabs.com/storage/10052/mobile-login-bro-786.png" alt="Reset Password" className={styles.image} />
            <div>

                <Form className={styles.form} onSubmit={formSubmission} method="POST">
                    <h4 style={{ textAlign: "center" }}>Enter a new Password</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="New Password" name="New_Password" required className={styles.input} onChange={InputHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Confirm Password" name="Confirm_Password" required className={styles.input} onChange={InputHandler} />
                    </Form.Group>

                    <Button style={{ marginTop: 25 + "px" }} className={styles.btn} type="submit">
                        Reset Password
                    </Button>

                </Form>

            </div>
        </div>
    </div>
}

export default ResetPasswordForm;