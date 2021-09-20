import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import MainPage from "./pages/mainPage/completeContent";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import ForgotPasswordPage from "./pages/forgotPassword/forgotPasswordPage";
import Dashboard from "./pages/dashboard/dashboard";

function App(){
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/> 
                <Route path="/forgotPassword" component={ForgotPasswordPage}/>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    </div>
}




export default App;