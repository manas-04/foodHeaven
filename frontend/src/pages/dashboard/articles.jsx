import React,{useState,useEffect} from 'react';
import axios from 'axios';

import ArticleCard from "./articleCard";
import styles from "./articleCard.module.css";

function ArticleSection(){

    const [recipes,setRecipes] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get("https://api.spoonacular.com/recipes/random?number=4&apiKey=a388cd6ac0a84ac29036f7fa562973ac");
        setRecipes(res.data.recipes);
    };

    return<div style={{paddingTop:20}} id="article">
    <center>
        <h5 style={{fontSize:34,fontWeight:300}}>Articles</h5>
        <hr className={styles.hr}/>
        <div style={{width:80+"%"}}>
            {recipes.map((recipe)=>{
                return <ArticleCard 
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                />
            })}
        </div>
    </center>
</div>
}

export default ArticleSection;