import React from 'react';
import styles from "./recipe.module.css"

function RecipeCard(props){
    return <div className={styles.card}>
        <img src={props.image} alt="" height={231+"px"}/>
        <div>
            <p className={styles.title}>{props.title}</p>
        </div>
    </div>
}

export default RecipeCard;