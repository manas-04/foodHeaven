import React,{useState,useEffect} from 'react';
import axios from 'axios';

import ArticleCard from "./articleCard";
import styles from "./articleCard.module.css";
import recipes from "./articleData";

const random = Math.floor(Math.random() * 20);

function ArticleSection(){

    const [Data,setData] = useState([]); 

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
       setData(recipes.slice(random, random+4));
    };

    return<section style={{paddingTop:20,backgroundColor:"rgb(233, 233, 233)"}} id="article">
    <center>
        <h5 style={{fontSize:34,fontWeight:300}}>Articles</h5>
        <hr className={styles.hr}/>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div style={{width:100+"%"}}>
            {Data.map((recipe)=>{
                return <ArticleCard 
                    title={recipe.title}
                    description={recipe.description}
                    imageUrl={recipe.imageUrl}
                    url={recipe.websiteUrl}
                />
            })}
        </div>
    </center>
</section>
}

export default ArticleSection;