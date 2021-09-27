import axios from 'axios';
import React, { useState,useEffect } from 'react';

import styles from "./recipe.module.css"
import AccessAlarm from '@material-ui/icons/AccessAlarm';

function RecipeCard(props){

    const [servings,setServings] = useState();
    const [healthScore, setHealthScore] = useState();
    const [duration,setDuration] = useState();
    const [sourceUrl, setSourceUrl] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get("https://api.spoonacular.com/recipes/" + props.id + "/information?apiKey=4f798ddd3ec9486caa20502738eb32c4");
        setServings(res.data.servings);
        setHealthScore(res.data.spoonacularScore);
        setDuration(res.data.readyInMinutes);
        setSourceUrl(res.data.spoonacularSourceUrl);
    };

    return <a href={sourceUrl} style={{color:"black"}}>
            <div className={styles.card}>
            <img src={props.image} alt="" height={231+"px"} className={styles.image}/>
            
            <div>
                <div className={styles.durationDiv}>
                    <AccessAlarm></AccessAlarm>
                    <p style={{marginBottom:10 + "px"}}>
                        : {duration} minutes
                    </p>
                </div>
                <p className={styles.title} style={{paddingTop:25+"px"}}>
                    {props.title}
                </p>
                <p className={styles.recipeDetails}>
                    Servings : {servings}
                </p>
                <p className={styles.recipeDetails}>
                    Health Score : {healthScore}
                </p>
            </div>
        </div>
    </a>
}

export default RecipeCard;