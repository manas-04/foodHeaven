import React from "react";

import styles from "./newRecipe.module.css";
import recipes from "./recipes";

function NewRecipe(){

    return <div className={styles.div}>
        <div className={styles.headingDiv}>
            <div style={{float:"left", width: 30+"%",marginTop:5}}>
                <hr className={styles.hr}/>
            </div>
            <span className={styles.heading}>Our Newest Recipes</span>
            <div style={{float:"right", width:30+"%",marginTop:5}}>
                <hr className={styles.hr}/>
            </div>
            <div className={styles.recipeContainer}>
            {
                recipes.map((recipe)=>{
                    return<a href={recipe.link} style={{color:"black"}}>
                            <div className={styles.recipeCard}>
                                <div>
                                    <img 
                                        alt="" 
                                        src={recipe.image} 
                                        height={180} 
                                        width={180} 
                                        style={{borderRadius:50+"%"}}    
                                    />
                                    <p className={styles.cardHeading}>
                                        {recipe.title}
                                    </p>
                                    <p className={styles.cardSubHeading}>
                                        By : {recipe.by}
                                    </p>
                                </div>
                            </div>
                        </a>
                    })
            }
            </div>
        </div>
    </div>
}

export default NewRecipe;