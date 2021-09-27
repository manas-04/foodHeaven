import React from 'react';
import {Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import styles from "./categories.module.css";

function CategoriesSection(){

    const history = useHistory();

    function ClickHandler(event){
        history
        .push("/search", {
            searchedItem:event.target.id,
        });
    }

    return <div className={styles.mainDiv} id="categories">
    <center>
        <p className={styles.title}>Meal Types you can search for :</p>
        <hr className={styles.hr}/>
        <div className={styles.div}>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Main course">
                    Main Course
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Bread">
                    Bread
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Side dish">
                    Side Dish
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Breakfast">
                    Breakfast
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Marinade">
                    Marinade
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Fingerfood">
                    Fingerfood
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Dessert">
                    Dessert
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Appetizer">
                    Appetizer
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Beverages">
                    Beverages
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Soup">
                    Soup
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Snack">
                    Snack
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Drink">
                    Drink
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Salad">
                    Salad
                </span>
            </Button>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Sauce">
                    Sauce
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button} onClick={ClickHandler}>
                <span id="Lunch">
                    Lunch
                </span>
            </Button>
        </div>
    </center>
</div>
}

export default CategoriesSection;