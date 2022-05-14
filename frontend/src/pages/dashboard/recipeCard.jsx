import React from "react";
import styles from "./slider.module.css";

function RecipeCard(props){
    return <div className={styles.card}>
        <a className={styles.link} href={props.url} style={{color:"black",textDecoration:"none"}}>
            <div className={styles.article}>
                <img src={props.imageUrl} alt="" height={150} width={100+"%"} style={{objectFit:"cover",margin:"auto"}}/>
                <p className={styles.title}>
                    {props.title}
                </p>
                <p className={styles.description}>
                    {props.description}
                </p>
                <div style={{display:"inline-flex",justifyContent:"space-between"}}>
                    <p className={styles.recipeDetails}>
                        <img alt="" src="./images/clock.svg"/> : {props.time} mins
                    </p>
                    <p className={styles.recipeDetails}>
                        Servings : {props.serving}
                    </p>
                </div>
            </div>
        </a>
</div>
}

export default RecipeCard;