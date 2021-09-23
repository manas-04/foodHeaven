import {React , useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

import SearchNavbar from './searchRecipeNavbar';
import styles from "./search.module.css";
import RecipeCard from './recipeCard';

function SearchPage(){

    const [searchedItems,setSearchedItems] = useState([]);
    const [totalRecipe,setTotalRecipe] = useState();

    const Location = useLocation();
    const query = Location.state.searchedItem;
    const apiKey="4f798ddd3ec9486caa20502738eb32c4";

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + apiKey + "&number=3")
        setSearchedItems(res.data.results);
        setTotalRecipe(res.data.totalResults);
    };

    return (
        <div>
            {/* {console.log(window.location.href) } */}
            {/* {console.log(Location)} */}
            {/* {console.log(searchedItems)}  */}
            <SearchNavbar itemSearched={query}/>
            <hr style={{marginTop:0+"px",marginBottom:0+'px',color:"bl"}} />
            <center>
                <div className={styles.page}>
                    <hr className={styles.hr}/>
                    <p style={{marginBottom:0 + "px"}}>
                        {totalRecipe} matching results found for {query}.
                    </p>
                    <div className={styles.card} >
                        {searchedItems.map((recipe)=>{               
                                return <RecipeCard 
                                key={recipe.id}
                                image={recipe.image}  
                                id={recipe.id} 
                                title={recipe.title}    
                            />                        
                        })}
                    </div>
                </div>
            </center>
        </div>
    );
}

export default SearchPage;