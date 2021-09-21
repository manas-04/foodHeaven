import React, { useState } from 'react';
import { Navbar,FormControl,Button } from 'react-bootstrap';

import styles from "./search.module.css";

function SearchNavbar(props){

    const [searchedItem,setsearchedItem] = useState(props.itemSearched);

    function inputHandler(event){
        setsearchedItem(event.target.value);
    }

    return <Navbar expand="lg" className={styles.navBar}>
        <img src="./images/icon.svg" width="33" height="33" alt="logo" style={{marginRight:10+"px"}}/>
        <Navbar.Brand href="/">foodHeaven</Navbar.Brand>
            <FormControl
                placeholder="Search"
                className={styles.input}
                value={searchedItem}
                onChange={inputHandler}
            />
        <Button variant="outline-secondary" id="button-addon2" className={styles.button}>
            <img src="images/search.svg" width="30" height="30"/>
        </Button>
        {/* {console.log(props.itemSearched)} */}
    </Navbar>
}

export default SearchNavbar;