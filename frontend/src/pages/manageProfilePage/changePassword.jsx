import React,{useState} from "react";
import styles from "./manageProfile.module.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';
import ProfileTab from "./profileTab";

function ChangePassword() {

    const alert = useAlert();
    const history = useHistory();

    const [userDetails, setUserDetails] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
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
        await axios.post(`/changePassword`, {
            token: localStorage.getItem("token"),
            user: userDetails,
        }).then((res) => {
            if (res.status === 200) {
                alert.success(res.data.msg);
                setTimeout(() => {
                    history.push("/manageProfile");
                },1500);
            }
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                alert.error(error.response.data.msg);
            }else if(error.response.status===403){
                alert.error(error.response.data.msg);
            }else if (error.response.status === 409) {
                alert.error(error.response.data.msg);
            }else if(error.response.status===404){
                history.push("/error404");
            }
            else {
                history.push("/error");
            }
        });
    }

    return <div className={styles.page}>
        <div className={styles.container}>
            <ProfileTab />
            <br/>
            <h3>Change Password</h3>
            <br/>
            <h6>New password should be different from previous password.</h6>
            <br/>
            <Form className={styles.form} onSubmit={formSubmission}>
                <Form.Group className="mb-3" controlId="oldPassword" >
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Old Password" name="oldPassword" required onChange={InputHandler} autoComplete="off"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="newPassword" >
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter New Password" name="newPassword" required onChange={InputHandler} autoComplete="off"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" required onChange={InputHandler} autoComplete="off"/>
                </Form.Group>
                <Button type="submit" className={styles.changebtn}>
                   Change Password
                </Button>
            </Form>
        </div>
    </div>
}

export default ChangePassword;