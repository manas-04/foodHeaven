import React from 'react';
import {Button} from "react-bootstrap";

import styles from "./categories.module.css";

function CategoriesSection(){
    return <div className={styles.mainDiv} id="categories">
    <center>
        <p className={styles.title}>Meal Types you can search for :</p>
        <hr className={styles.hr}/>
        <div className={styles.div}>
            <Button className={styles.button}><span>Main Course</span></Button>
            <Button className={styles.button}>
                <span>
                    Bread
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Side Dish
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Breakfast
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Marinade
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button}>
                <span>
                    Fingerfood
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Dessert
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Appetizer
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Beverages
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button}>
                <span>
                    Soup
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Snack
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Drink
                </span>
            </Button>
        </div>
        <div className={styles.div}>
            <Button className={styles.button}>
                <span>
                    Salad
                </span>
            </Button>
            <Button className={styles.button}>
                <span>
                    Sauce
                </span>
            </Button>
        </div>
    </center>
</div>
}

export default CategoriesSection;