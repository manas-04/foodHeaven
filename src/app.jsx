import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainPage from "./pages/mainPage/completeContent";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";

function App(){
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage}/> 
            </Switch>
        </Router>
    </div>
}




export default App;