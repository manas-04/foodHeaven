import {React , useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router';
import {BeatLoader} from "react-spinners";

import SearchNavbar from './searchRecipeNavbar';
import styles from "./search.module.css";
import RecipeCard from './recipeCard';
import Footer from "./footer";

// import LoadingScreen from './loadingComponent';

function SearchPage(){

    const [searchedItems,setSearchedItems] = useState([]);
    const [totalRecipe,setTotalRecipe] = useState();
    const [isLoading,setLoading] = useState(true);

    const history = useHistory();
    const Location = useLocation();
    const query = Location.state.searchedItem;
    const apiKey="4f798ddd3ec9486caa20502738eb32c4";

    useEffect(() => {
        getData();
    });

    const getData = async () => {
        await axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&number=3")
        .then((res)=>{
            setSearchedItems(res.data.results);
            setTotalRecipe(res.data.totalResults);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }).catch((error) => {
            console.log(error);
            setTimeout(() => {
                setLoading(true);
            }, 1000);
            history.replace("/error");         
        }); 
    };

    return (
        <div>
        {isLoading?
            <div className={styles.mainDiv}>
                <center>
                    <div className={styles.container}>
                        <img alt=" " src="../images/dataProcessing.svg" className={styles.image}/>
                        <p style={{fontSize:34}}>
                            Processing your request ...
                        </p>
                        <BeatLoader loading />
                    </div>
                </center>
            </div>
            :<div>
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
            <Footer />
        </div>
        }
           
        </div>
        );
}

export default SearchPage;