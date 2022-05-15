import React from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";

function Footer() {
	let history = useHistory();

	function clickHandler(event) {
		const name = event.target.name;
		if (name === "login") {
			history.push("/login");
		} else if (name === "register") {
			history.push("/register");
		}
	}

	const alert = useAlert();

	const logoutHandler = async () => {
		await axios
			.post(`user/logout`, {
				token: localStorage.getItem("token"),
			})
			.then((res) => {
				if (res.status === 200) {
					history.replace("/");
					alert.success(res.data.msg);
					localStorage.removeItem("token");
					window.location.reload();
				}
			})
			.catch((error) => {
				if (error.response.status === 500 || error.response.status === 409) {
					localStorage.removeItem("token");
					history.replace("/");
					alert.success("Successfully Logged Out.");
				} else if (error.response.status === 404) {
					alert.error("Invalid User.");
				}
			});
	};

	return (
		<footer className='localFooter'>
			<div className='itemDiv m-auto'>
				<img
					src='./images/icon.svg'
					width='33'
					height='33'
					className='d-inline-block align-top'
					style={{ marginTop: 8 + "px" }}
					alt=''
				/>
				<div
					style={{
						fontWeight: 500,
						marginRight: 200 + "px",
						fontSize: 18 + "px",
					}}
					className='localFooterItem'>
					foodHeaven
				</div>
				<a className='localFooterItem footerLinks' href='/dashboard'>
					About Us
				</a>
				<a className='localFooterItem footerLinks' href='/dashboard'>
					Follow Us
				</a>
				<a
					className='localFooterItem footerLinks'
					href='/feedback'
					style={{
						marginTop: 12 + "px",
						marginBottom: 10 + "px",
						marginRight: 180 + "px",
					}}>
					Feedback
				</a>
				{localStorage.getItem("token") ? (
					<div className='btnSection'>
						<button
							className='btn localBtn'
							name='logout'
							onClick={logoutHandler}>
							Sign Out
						</button>
					</div>
				) : (
					<div className='btnSection'>
						<button className='localBtn' name='login' onClick={clickHandler}>
							Log In
						</button>
						<button className='localBtn' name='register' onClick={clickHandler}>
							Sign-Up
						</button>
					</div>
				)}
			</div>
		</footer>
	);
}

export default Footer;
