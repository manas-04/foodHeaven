import React from 'react';
import {Button} from "react-bootstrap";

import styles from "./sweets.module.css";
import sweetsTitle from "./sweetsTitle.jsx";
import { sweetsData } from './sweetsTitle.jsx';

const randomNumber = Math.floor(Math.random() * 29);
const randomData = Math.floor(Math.random() * 22);

function SweetSection(){
    return <div className={styles.sweetsCard}>
    <div className={styles.section} id="sweetCard">
        <div style={{width:40+"%",textAlign:"center"}}>
                <p className={styles.sweetTitle}>
                    {sweetsTitle[randomNumber]}
                </p>
                <p style={{paddingBottom:20,fontSize:19,fontWeight:300}}>
                    {sweetsData[randomData].description}
                </p>
                <Button 
                    className={styles.readMore} 
                    href={sweetsData[randomData].sourceLink}  
                >
                    Read More
                </Button>
        </div>
        <div>
            <img src={sweetsData[randomData].imageUrl} alt="" className={styles.sweetImage}/>
        </div>
    </div>
</div>
}

export default SweetSection;