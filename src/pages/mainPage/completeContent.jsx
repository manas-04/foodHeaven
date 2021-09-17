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
        <div className="center">
        <center>
            <MainDiv visible={isVisible} changeVisibility={changeVisibility}/>
        </center>
        </div>
    </div>);
}

export default CompleteContent;