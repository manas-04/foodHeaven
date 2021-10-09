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
import SearchPage from "./pages/searchRecipePage/searchRecipe";
import ErrorPage from "./pages/errorPage/errorPage";
import Feedback from "./pages/feedback/feedback";

function App(){
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/> 
                <Route path="/forgotPassword" component={ForgotPasswordPage}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/search" render={(props)=><SearchPage {...props} />} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/feedback" component={Feedback}/>
            </Switch>
        </Router>
    </div>
}




export default App;