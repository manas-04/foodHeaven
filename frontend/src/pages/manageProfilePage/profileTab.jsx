import React from "react";
import { useHistory } from "react-router-dom";

function ProfileTab() {

    const history = useHistory();

    function handleResetClick()
    {
        history.push("changePassword");
    }
    function handleProfileClick()
    {
        history.push("manageProfile");
    }
    function handleEditProfileClick() {
        history.push("editProfile");
    }

    return <div className="row">
        <ul className="nav nav-tabs  nav-justified" role="tablist">
            <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" onClick={handleProfileClick}>My Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="edit-tab" data-toggle="tab" href="#edit" role="tab" onClick={handleEditProfileClick}>Edit Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="reset-tab" data-toggle="tab" href="#reset" onClick={handleResetClick} role="tab" >Reset Password</a>
            </li>
        </ul>
    </div>
}

export default ProfileTab;