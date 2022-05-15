import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

import styles from "./feedback.module.css";

function ThankYou() {

    const history = useHistory();

    return <div className={styles.completePage}>
        <center>
            <div className={styles.container}>
                <img alt="Contact you soon" src="./images/contact.svg" className={styles.image} />
                <div>
                    <div className={styles.remarkContainer}>
                        <p className={styles.thankYou}>
                            Thank You !
                        </p>
                        <p style={{ fontSize: 30, marginTop: 0 }}>
                            We will contact you soon ! Stay Tuned !
                        </p>
                        <Button
                            className={styles.button}
                            onClick={() => {
                                history.push('/');
                            }}
                        >
                            <span id="GoBack">
                                Go Back
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </center>
    </div>
}

export default ThankYou;