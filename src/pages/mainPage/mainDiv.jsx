import React ,{useState} from "react";
import {Button,InputGroup,FormControl} from "react-bootstrap";

import Footer from "./footer";

function MainDiv(props){

    return(<div className="bodyDiv form-inline">  
            {
            props.visible
            ?<div className="searchMainDiv">
                <div style={{display:"inline-flex"}}>
                    <h3 style={{fontWeight:300}}>Type to Search</h3>
                    <div className="closeDiv">
                        <img 
                            src="./images/close.svg" 
                            onClick={props.changeVisibility}
                        />
                    </div>
                </div>
                    <div className="searchDiv">
                        <form>
                            <InputGroup className="mb-3">
                                <FormControl
                                    style={{width:550+"px"}}
                                    className="searchInput"
                                    placeholder="Search"
                                />
                                <Button id="button-addon1" variant="warning" className="searchIcon">
                                    <img src="./images/search.svg" />
                                </Button>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            :<div><h1 className="mainHeading">Welcome to the Home of Delicious Recipes</h1>
                <form>
                    <button className="bodySearchBtn btn" onClick={props.changeVisibility}>
                        <img src="./images/search.svg" />
                    </button>
                </form>
            </div>
        }
        <Footer />
    </div>);
}

export default MainDiv;