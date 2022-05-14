import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAlert } from 'react-alert';

function NavBar(props) {

    let history = useHistory();

    function clickHandler(event) {
        const name = event.target.name;
        if (name === "login") {
            history.push("/login");
        } else if (name === "register") {
            history.push("/register");
        }
    }

    const alert = useAlert();

    const logoutHandler = async () => {
        await axios.post(`user/logout`, {
            token: localStorage.getItem("token"),
        }).then((res) => {
            if (res.status === 200) {
                history.replace("/");
                alert.success(res.data.msg);
                localStorage.removeItem('token');
                window.location.reload();
            }
        }).catch((error) => {
            if (error.response.status === 500 || error.response.status === 409) {
                localStorage.removeItem('token');
                history.replace("/");
                alert.success("Successfully Logged Out.");
            } else if (error.response.status === 404) {
                alert.error("Invalid User.");
            }
        })
    }

    return (<nav className="navbar-expand-lg navbar-light localNavBar">
        <div className="navbar-brand mb-0 h1">
            <img src="./images/icon.svg" width="33" height="33" style={{ marginRight: 10 + "px" }} alt="" />
            foodHeaven
        </div>
        <div className="itemDiv">
            <a className="nav-item localNavItem" href="/comingSoon">Features</a>
            <a className="nav-item localNavItem" href="#categories">Categories</a>
            <a className="nav-item localNavItem" href="/comingSoon">Contacts</a>
            {
                localStorage.getItem('token')&&<a className="nav-item localNavItem" href="/dashboard">Dashboard</a>
            }
        </div>
        {localStorage.getItem('token') ?
            <div className="btnSection ml-auto">
                <button className="localBtn" name="logout" onClick={logoutHandler} >
                    Sign Out
                </button>
            </div> :
            <div className="btnSection ml-auto">
                <button className="localBtn" name="login" onClick={clickHandler} >
                    Log In
                </button>
                <button className="localBtn" name="register" onClick={clickHandler}>
                    Sign-Up
                </button>
                <button className="btn icon" onClick={props.changeVisibility}>
                    <img src="./images/search.svg" alt="" />
                </button>
            </div>}
    </nav>);
}

export default NavBar;