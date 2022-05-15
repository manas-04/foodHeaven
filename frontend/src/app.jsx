import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/mainPage/completeContent";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import ForgotPasswordPage from "./pages/forgotPassword/forgotPasswordPage";
import Dashboard from "./pages/dashboard/dashboard";
import SearchPage from "./pages/searchRecipePage/searchRecipe";
import ErrorPage from "./pages/errorPage/errorPage";
import ResetPasswordPage from "./pages/resetPassword/resetPasswordPage";
import Error404 from "./pages/errorPage/error404";
import FeedbackPage from "./pages/feedback/feedback";
import ThankYouPage from "./pages/feedback/ThankYou";
import ManageProfile from "./pages/manageProfilePage/manageProfile";
import EditProfile from "./pages/manageProfilePage/editProfile";
import ChangePassword from "./pages/manageProfilePage/changePassword";
import ComingSoon from "./pages/errorPage/comingSoon";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={MainPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/forgotPassword' component={ForgotPasswordPage} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/search' render={(props) => <SearchPage {...props} />} />
					<Route path='/error' component={ErrorPage} />
					<Route path='/feedback' component={FeedbackPage} />
					<Route path='/thankyou' component={ThankYouPage} />
					<Route
						path='/resetPassword/:resetToken'
						component={ResetPasswordPage}
					/>
					<Route path='/error404' component={Error404} />
					<Route path='/manageProfile' component={ManageProfile} />
					<Route path='/editProfile' component={EditProfile} />
					<Route path='/changePassword' component={ChangePassword} />
					<Route path='/comingSoon' component={ComingSoon} />
					<Route path='/aboutUs' component={AboutUs}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
