import React ,{useState} from "react";
import Footer from "./footer";

function MainDiv(){

    // const [image,setImage] = useState();
    // styles={{ backgroundImage:`url(${image})`}}

    return(<div className="bodyDiv form-inline">  
            <h1 className="mainHeading">Welcome to the Home of Delicious Recipes</h1>
            <form>
                <button className="bodySearchBtn btn">
                    <img src="./images/search.svg"/>
                </button>
                <input className=" inputArea form-control" type="search" id="mainBodySearch" placeholder="Search"/>
            </form>
        <Footer />
    </div>);
}

export default MainDiv;