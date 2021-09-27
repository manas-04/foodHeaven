import React from 'react';

import styles from "./articleCard.module.css";

function ArticleCard(props){
    return <div className={styles.card}>
        <center>
            <a href="" className={styles.link}>
                <div className={styles.article}>
                    <img src={props.image} alt="" height="250" width="360" style={{objectFit:"contain"}}/>
                    <p className={styles.title}>
                        {props.title}
                    </p>
                </div>
            </a>
        </center>
    </div>
}

export default ArticleCard;