import React from "react";
import SignUpForm from "./signUpForm";

import styles from "./registerPage.module.css";

function RegisterPage(){
    return <div className={styles.page}>
        <SignUpForm />
    </div>
}

export default RegisterPage;