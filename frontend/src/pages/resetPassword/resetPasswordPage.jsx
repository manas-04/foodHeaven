import React from "react";
import ResetPasswordForm from "./resetPasswordForm";
import styles from "./resetPass.module.css";

function ResetPassword()
{
    return <div className={styles.page}>
        <ResetPasswordForm />
    </div>
}

export default ResetPassword;