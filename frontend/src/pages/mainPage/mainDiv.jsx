import React, { useState }  from "react";
import {Button,InputGroup,FormControl} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Footer from "./footer";
import NewRecipe from "./newRecipe";

function MainDiv(props){

    // const randomImage = Images[Math.floor(Math.random() * 3)];

    const [search,setSearch] = useState("");
    const history = useHistory();

    function inputHandler(event){
        setSearch(event.target.value);
    }

    function searchFormSubmission(){
        history
            .push("/search", {
                searchedItem:search,
            });
    }

    return(<div><div className="bodyDiv">  
            {
            props.visible
            ?<div className="searchMainDiv">
                <div style={{display:"inline-flex"}}>
                    <h3 style={{fontWeight:300}}>Type to Search</h3>
                    <div className="closeDiv">
                        <img 
                            src="./images/close.svg" 
                            onClick={props.changeVisibility}
                            alt=""
                        />
                    </div>
                </div>
                    <div className="searchDiv">
                        <form onSubmit={searchFormSubmission}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    onChange={inputHandler}
                                    style={{width:550+"px"}}
                                    className="searchInput"
                                    placeholder="Search"
                                    value={search}
                                />
                                <Button 
                                    id="button-addon1" 
                                    variant="warning" 
                                    className="searchIcon"
                                    type="submit"
                                >
                                    <img src="./images/search.svg" alt=""/>
                                </Button>
                            </InputGroup>
                        </form>
                    </div>
                </div> 
            :<div><h1 className="mainHeading">Welcome to the Home of Delicious Recipes</h1>
                {/* <form> */}
                    <button className="bodySearchBtn btn" onClick={props.changeVisibility}>
                        <img src="./images/search.svg" alt="" />
                    </button>
                {/* </form> */}
            </div>
        }
    </div>
    <NewRecipe />
    <Footer />
    </div>);
}

export default MainDiv;