import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router';
import { BeatLoader } from "react-spinners";
import Spinner from "./Spinner"

import SearchNavbar from './searchRecipeNavbar';
import styles from "./search.module.css";
import RecipeCard from './recipeCard';
import Footer from "./footer";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchPage() {

    const [searchedItems, setSearchedItems] = useState([]);
    const [totalRecipe, setTotalRecipe] = useState();
    const [isLoading, setLoading] = useState(true);
    const [offset, setOffset] = useState(1);

    const history = useHistory();
    const Location = useLocation();
    const query = Location.state.searchedItem;
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = async () => {
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=10&offset=${offset}`)
            .then((res) => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                setSearchedItems(res.data.results);
                setTotalRecipe(res.data.totalResults);
            }).catch((error) => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                history.replace("/error");
            });
    };

    const fetchMoreData = async () => {
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=10&offset=${offset + 1}`)
            .then((res) => {
                setSearchedItems(res.data.results);
                setTotalRecipe(res.data.totalResults);
            }).catch((error) => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                history.replace("/error");
            });
        setOffset(offset + 2)
    };
    // console.log(totalRecipe)

    return (
        <div>
            {isLoading ?
                <div className={styles.mainDiv}>
                    <center>
                        <div className={styles.container}>
                            <img alt=" " src="../images/dataProcessing.svg" className={styles.image} />
                            <p style={{ fontSize: 34 }}>
                                Processing your request ...
                            </p>
                            <BeatLoader loading />
                        </div>
                    </center>
                </div>
                : <div>
                    <SearchNavbar itemSearched={query} />
                    <hr style={{ marginTop: 0 + "px", marginBottom: 0 + 'px', color: "bl" }} />
                    <center>
                        <div className={styles.page}>
                            <hr className={styles.hr} />
                            <p style={{ marginBottom: 42.5 + "px", marginTop: "42.5px" }}>
                                {totalRecipe} matching results found for {query}.
                            </p>
                            <InfiniteScroll
                                dataLength={searchedItems.length}
                                next={fetchMoreData}
                                hasMore={searchedItems.length !== totalRecipe}
                                loader={<Spinner />}
                            >
                                <div className={styles.card} >
                                    {searchedItems.map((recipe) => {
                                        return <RecipeCard
                                            key={recipe.id}
                                            image={recipe.image}
                                            id={recipe.id}
                                            title={recipe.title}
                                        />
                                    })}
                                </div>
                            </InfiniteScroll>
                        </div>
                    </center>
                    <Footer />
                </div>
            }

        </div >
    );
}

export default SearchPage;