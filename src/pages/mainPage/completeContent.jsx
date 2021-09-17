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
        <center>
            <MainDiv visible={isVisible} changeVisibility={changeVisibility}/>
        </center>
    </div>);
}

export default CompleteContent;