import React, { useState, useEffect } from "react";
import styles from "./manageProfile.module.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';
import ProfileTab from "./profileTab";

function EditProfile(props) {

    const alert = useAlert();
    const history = useHistory();

    const [userDetails, setUserDetails] = useState({
        fName: "",
        middleName: "-",
        lName: "",
        phoneNo: "",
        address: "",
        country: "",
        dob: "",
    });

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = async () => {
        await axios.post("/user/manageProfile", {
            token: localStorage.getItem("token"),
        }).then((res) => {
            setUserDetails({
                fName: res.data.foundUser.fName,
                middleName: res.data.foundUser.middleName,
                lName: res.data.foundUser.lName,
                phoneNo: res.data.foundUser.phoneNo,
                address: res.data.foundUser.address,
                country: res.data.foundUser.country,
                dob: res.data.foundUser.dob
            });
        }).catch((err) => {
            console.log(err);
        })
    }

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
        await axios.post(`/user/editProfile`, {
            token: localStorage.getItem("token"),
            user: userDetails,
        }).then((res) => {
            if (res.status === 200) {
                alert.success(res.data.msg);
                setTimeout(() => {
                    history.push("/manageProfile");
                }, 1500);
            }
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                alert.error(error.response.data.msg);
            } else if (error.response.status === 404) {
                history.push("/error404");
            } else if (error.response.status === 409) {
                alert.error(error.response.data.msg);
            }
            else {
                history.push("/error");
            }
        });
    }

    return <div className={styles.page}>
        <div className={styles.container}>
            <ProfileTab />
            <Form className={styles.form} onSubmit={formSubmission} method="POST">
                <img id={styles.img} src="./images/personal.jpg" alt="profile_pic" />
                <Form.Group className="mb-3" controlId="efName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="fName" defaultValue={userDetails.fName} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Group className="mb-3" controlId="middleName">
                    <Form.Control type="text" placeholder="Middle Name" name="middleName" defaultValue={userDetails.middleName} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Group className="mb-3" controlId="lName">
                    <Form.Control type="" placeholder="Last Name" name="lName" defaultValue={userDetails.lName} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Group className="mb-3" controlId="phoneNo">
                    <Form.Control type="tel" placeholder="Phone Number" name="phoneNo" defaultValue={userDetails.phoneNo} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Control as="textarea" placeholder="Address" name="address" defaultValue={userDetails.address} style={{ height: "77px" }} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Control type="text" placeholder="Country" name="country" defaultValue={userDetails.country} onChange={InputHandler} />
                </Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Group className="mb-3" controlId="dob">
                    <Form.Control type="date" placeholder="Date of Birth" name="dob" defaultValue={userDetails.dob} onChange={InputHandler} />
                </Form.Group>

                <Button type="submit" className={styles.btn}>
                    Save Details
                </Button>
            </Form>
        </div>
    </div>
}

export default EditProfile;