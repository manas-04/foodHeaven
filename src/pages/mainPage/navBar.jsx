import React from "react";
import { useHistory } from "react-router-dom";

function NavBar(){

    let history = useHistory();

    function clickHandler(){
        history.push("/login");
    }

    return (<nav className="navbar-expand-lg navbar-light localNavBar">
    <div className="navbar-brand mb-0 h1">
        <img src="./images/icon.svg" width="33" height="33" className="d-inline-block align-top" style={{marginRight:12 + "px"}}  alt=""/>
        foodHeaven
    </div>
    <div className="itemDiv">
        <a className="nav-item localNavItem" href="">Features</a>
        <a className="nav-item localNavItem" href="">Categories</a>
        <a className="nav-item localNavItem" href="">Contacts</a>
    </div>
    <div class="btnSection ml-auto">
        <button className="btn localBtn" onClick = {clickHandler} > 
            Log In
        </button>
        <button className="btn localBtn">
            Sign-Up
        </button>
        <button className="btn iconBtn ">
            <img src="./images/search.svg" />
        </button>
    </div>
    </nav>);
}

export default NavBar;