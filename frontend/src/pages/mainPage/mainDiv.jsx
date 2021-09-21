import React, { useState }  from "react";
import {Button,InputGroup,FormControl} from "react-bootstrap";
import axios from "axios";
import { useHistory,Redirect, Link } from "react-router-dom";

import Footer from "./footer";

function MainDiv(props){

    const [search,setSearch] = useState("");
    const history = useHistory();

    function inputHandler(event){
        setSearch(event.target.value);
    }

    function searchFormSubmission(event){

        const apiKey="6f740b27bc614232818aa14e3d14cc43";
        event.preventDefault();

        axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + search + "&apiKey=" + apiKey + "&number=20")
        .then(res => {
            // console.log(res);
            history
                .push("/search", {
                    searchedItem:search,
                    itemsArray:res.data,
                });
                // if(res.status === 200 ){
                //     return <Redirect 
                //         to={{
                //             pathname:"/search",
                //         }}
                //     />
                // } 
        })
        .catch(error => {
            console.log(error);
        })

    }

    return(<div className="bodyDiv">  
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