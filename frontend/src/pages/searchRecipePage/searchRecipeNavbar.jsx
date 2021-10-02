import React, { useState } from 'react';
import { Navbar,FormControl,Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import styles from "./search.module.css";

function SearchNavbar(props){

    const [searchedItem,setsearchedItem] = useState(props.itemSearched);
    const history = useHistory();

    function inputHandler(event){
        setsearchedItem(event.target.value);
    }

    function searchFormSubmission(){
        history
            .push("/search", {
                searchedItem:searchedItem,
            });
        window.location.reload();
    }

    return <Navbar expand="lg" className={styles.navBar}>
        <img src="./images/icon.svg" width="33" height="33" alt="logo" style={{marginRight:10+"px"}}/>
        <Navbar.Brand href="/" style={{color:"#e33d26"}}>
            foodHeaven
        </Navbar.Brand>
            <FormControl
                placeholder="Search"
                className={styles.input}
                value={searchedItem}
                onChange={inputHandler}
                style={{marginRight:0+"px"}}
            />
            <Button
                type="submit" 
                variant="outline-secondary" 
                id="button-addon2" 
                className={styles.button}
                onClick={searchFormSubmission}
            >
                <img src="images/search.svg" width="30" height="30" alt="" />
            </Button>
        {/* {console.log(props.itemSearched)} */}
    </Navbar>
}

export default SearchNavbar;