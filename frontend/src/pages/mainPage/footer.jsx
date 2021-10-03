import React from "react"; 
import { useHistory } from "react-router-dom";

function Footer(){

    let history = useHistory();

    function clickHandler(event){
        const name = event.target.name;
        if(name==="login"){
            history.push("/login");
        }else if(name==="register"){
            history.push("/register");
        }  
    }

    return (<footer className="localFooter">
        <div className="itemDiv m-auto">
            <img src="./images/icon.svg" width="33" height="33" className="d-inline-block align-top" style={{marginTop:8+"px"}}  alt=""/>
            <div style={{fontWeight:500,marginRight:200+"px",fontSize:18+"px"}} className="localFooterItem">
                foodHeaven
            </div>
            <a className="localFooterItem footerLinks" href="">
                About Us
            </a>
            <a className="localFooterItem footerLinks" href="">
                Follow Us 
            </a>
            <a className="localFooterItem" href="" style={{marginTop:12+ "px",marginBottom:10 + "px",marginRight:180+"px"}}>
                Community 
            </a>
            <div className="btnSection">
                <button className="btn localBtn" name="login" onClick={clickHandler}> 
                    Log In
                </button>
                <button className="btn localBtn" name="register" onClick={clickHandler}>
                    Sign-Up
                </button>
            </div>
            
        </div>
    </footer>);
}

export default Footer;