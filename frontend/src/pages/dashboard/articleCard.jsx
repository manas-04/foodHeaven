import React from 'react';

import styles from "./articleCard.module.css";

function ArticleCard(props){
    return <div className={styles.card}>
        <center>
            <a className={styles.link} href={props.url}>
                <div className={styles.article}>
                    <img src={props.imageUrl} alt="" height={300} width={100+"%"} style={{objectFit:"cover"}}/>
                    <p className={styles.title}>
                        {props.title}
                    </p>
                    <p>
                        {props.description}
                    </p>
                </div>
            </a>
        </center>
    </div>
}

export default ArticleCard;