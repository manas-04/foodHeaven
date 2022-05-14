import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Footer from "./footer";
import NewRecipe from "./newRecipe";

function MainDiv(props) {

    const [search, setSearch] = useState("");
    const history = useHistory();

    function inputHandler(event) {
        setSearch(event.target.value);
    }

    function searchFormSubmission() {
        history
            .push("/search", {
                searchedItem: search,
            });
    }

    return (<div>
        <div className="bodyDiv">
            {
                props.visible
                    ? <div className="searchMainDiv">
                        <div style={{ display: "inline-flex" }}>
                            <h3 style={{ fontWeight: 300,marginBottom:"15px"}}>Type to Search</h3>
                            <div className="closeDiv" style={{cursor:"pointer"}}>
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
                                        style={{ width: 550 + "px" }}
                                        className="searchInput"
                                        placeholder="Search Delicious Recipes"
                                        value={search}
                                    />
                                    <Button
                                        id="button-addon1"
                                        variant="warning"
                                        className="searchIcon"
                                        type="submit"
                                        style={{height:"38px"}}
                                    >
                                        <img src="./images/search.svg" alt="search" style={{height:"30px",paddingBottom:"3px"}}/>
                                    </Button>
                                </InputGroup>
                            </form>
                        </div>
                    </div>
                    : <div><h1 className="mainHeading">Welcome to the Home of Delicious Recipes</h1>
                        <button className="bodySearchBtn" onClick={props.changeVisibility}>
                            <img src="./images/search.svg" alt="" />
                        </button>
                    </div>
            }
        </div>
        <NewRecipe />
        <Footer />
    </div>);
}

export default MainDiv;