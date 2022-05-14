import React from "react";
import { useHistory } from "react-router";
import {Button} from "react-bootstrap";

import styles from "./errorPage.module.css";

function ErrorPage(){

    const history = useHistory();

    function clickhandler(){
        history.goBack();
    }

    return <div className={styles.mainDiv}>
        <center>
            <div className={styles.container}>
                <img alt="" src="images/error.svg" className={styles.image}/>
                <p className={styles.title}>
                    Oops!
                </p>
                <p className={styles.subTitle}>
                    Somthing went Wrong.
                </p>
                <p style={{marginTop:-1+"%"}}>
                    Brace yourself till we get the error fixed.
                </p>
                <Button className={styles.button} onClick={clickhandler}>
                    <span>
                        Go Back
                    </span>
                </Button>
            </div>
        </center>
    </div>
}

export default ErrorPage;