import React from 'react';
import { useLocation } from 'react-router';

import SearchNavbar from './searchRecipeNavbar';
import styles from "./search.module.css";
import RecipeCard from './recipeCard';

function SearchPage(){

    const Location = useLocation();
    const searchedItems = Location.state.itemsArray.results;
    const totalRecipe = Location.state.itemsArray.totalResults;
    const query = Location.state.searchedItem;

    return (
        <div>
            {/* {console.log(window.location.href) }
            {console.log(Location)} */}
            {/* {console.log(searchedItems)}  */}
            <SearchNavbar itemSearched={query}/>
            <center>
                <hr className={styles.hr}/>
                <p style={{marginBottom:0 + "px"}}>
                    {totalRecipe} matching results found for {query}.
                </p>
                <div className={styles.card}>
                    {searchedItems.map((recipe)=>{
                        {/* {console.log(recipe.image)} */}
                        return <RecipeCard 
                            key={recipe.id}
                            image={recipe.image}  
                            id={recipe.id} 
                            title={recipe.title}    
                        />
                    })}
                </div>
            </center>
        </div>
    );
}

export default SearchPage;