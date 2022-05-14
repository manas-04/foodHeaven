import React,{useState,useEffect} from 'react';

import ArticleCard from "./articleCard";
import styles from "./articleCard.module.css";
import recipes from "./articleData";

const random = Math.floor(Math.random() * 20);

function ArticleSection(){

    const [Data,setData] = useState([]); 

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = () => {
       setData(recipes.slice(random, random+4));
    };

    return<section style={{paddingTop:20,backgroundColor:"rgb(233, 233, 233)",textAlign:"center"}} id="article">
        <h5 style={{fontSize:38,fontWeight:500}}>Articles</h5>
        <hr className={styles.hr}/>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div style={{width:100+"%"}}>
            {Data.map((recipe)=>{
                return <ArticleCard 
                    key={recipe.title}
                    title={recipe.title}
                    description={recipe.description}
                    imageUrl={recipe.imageUrl}
                    url={recipe.websiteUrl}
                />
            })}
        </div>
    </section>
}

export default ArticleSection;