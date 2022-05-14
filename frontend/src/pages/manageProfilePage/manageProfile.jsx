import React, { useState, useEffect } from "react";
import styles from "./manageProfile.module.css";
import EditProfile from "./editProfile";
import axios from "axios";
import ProfileTab from "./profileTab";
import ChangePassword from "./changePassword";

function ManageProfile() {

    const [fName, setfName] = useState();
    const [lName, setlName] = useState();
    const [email, setEmail] = useState();
    const [middleName, setmiddleName] = useState();
    const [phoneNo, setphoneNo] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
    const [dob, setDob] = useState();

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = async () => {
        await axios.post("/user/manageProfile", {
            token: localStorage.getItem("token"),
        }).then((res) => {
            setfName(res.data.foundUser.fName);
            setlName(res.data.foundUser.lName);
            setEmail(res.data.foundUser.email);
            setmiddleName(res.data.foundUser.middleName);
            setphoneNo(res.data.foundUser.phoneNo);
            setAddress(res.data.foundUser.address);
            setCountry(res.data.foundUser.country);
            setDob(res.data.foundUser.dob);
        }).catch((err) => {
            console.log(err);
        })
    }
   
    return <div className={styles.page}>
        <div className={styles.container}>
        <ProfileTab />
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="col-md-4" id="imageContainer">
                        <img id={styles.img} src="./images/personal.jpg" alt="profile_pic" />
                        <h5>{fName} {middleName} {lName}</h5>
                        <p>{email}</p>
                    </div>
                    <div className={styles.details}>
                        <div className="row">
                            <div className="col-md-4">
                                <label>First Name</label>
                            </div>
                            <div className="col-md-4">
                                <p>{fName}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Middle Name</label>
                            </div>
                            <div className="col-md-4">
                                <p>{middleName}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Last Name</label>
                            </div>
                            <div className="col-md-4">
                                <p>{lName}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Email Address</label>
                            </div>
                            <div className="col-md-4">
                                <p>{email}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Phone Number</label>
                            </div>
                            <div className="col-md-4">
                                <p>{phoneNo}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Address</label>
                            </div>
                            <div className="col-md-4">
                                <p>{address}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Country</label>
                            </div>
                            <div className="col-md-4">
                                <p>{country}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Date of Birth</label>
                            </div>
                            <div className="col-md-4">
                                <p>{dob}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="edit">
                <EditProfile fName={fName}/>
                </div>
                <div className="tab-pane" id="reset">
                   <ChangePassword />
                </div>
            </div>
        </div>
    </div>
}

export default ManageProfile;