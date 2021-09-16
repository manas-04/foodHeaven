import React ,{useState} from "react";
import NavBar from "./navBar";
import MainDiv from "./mainDiv";

function CompleteContent(){

    const [isVisible,setvisibility]= useState(false);

    function changeVisibility(){
        setvisibility(!isVisible);
    }

    return (<div>
        <NavBar changeVisibility={changeVisibility}/>
        <MainDiv visible={isVisible} changeVisibility={changeVisibility}/>
    </div>);
}

export default CompleteContent;