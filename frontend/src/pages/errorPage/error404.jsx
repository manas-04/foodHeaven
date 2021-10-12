import React from "react";
import styles from "./error404.module.css"
import {Button} from "react-bootstrap";
import { useHistory } from "react-router";

function Error404()
{
    const history = useHistory();

    function handleHome(){
        history.push("/");
    }

    function handleReport()
    {
        history.push("/");
    }
    return <div className={styles.mainDiv}>
        <div id={styles.container}>
          <img src="./images/error404.svg" alt="Error 404" id={styles.image}/>
          <p id={styles.text}>Sorry,the page you are looking for doesn’t exist.If you think something 
         <br/> is broken report an error.</p>
          <Button id={styles.homeBtn} onClick={handleHome}>Return Home</Button>
          <Button id={styles.reportBtn} onClick={handleReport}>Report Problem</Button>
        </div>
    </div>
}

export default Error404;