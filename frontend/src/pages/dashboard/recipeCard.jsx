import React from "react";
import styles from "./slider.module.css";

function RecipeCard(props){
    return <div className={styles.card}>
        <a className={styles.link} href={props.url}>
            <div className={styles.article}>
                <img src={props.imageUrl} alt="" height={150} width={100+"%"} style={{objectFit:"cover"}}/>
                <p className={styles.title}>
                    {props.title}
                </p>
                <p className={styles.description}>
                    {props.description}
                </p>
            </div>
        </a>
</div>
}

export default RecipeCard;