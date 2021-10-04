import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from "./app";

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2500,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.FADE
}  

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
    , document.getElementById("root")
);