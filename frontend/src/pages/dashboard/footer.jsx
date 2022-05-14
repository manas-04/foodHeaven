import React, { useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import styles from "./footer.module.css";
import { useHistory } from "react-router";
import { useAlert } from "react-alert";
import axios from "axios";

function Footer() {

	const history = useHistory();
	const alert = useAlert();
	const [userEmail, setUserEmail] = useState({
		email: "",
	});

	function InputHandler(event) {
		const { name, value } = event.target;

		setUserEmail((prev) => {
			return {
				...prev,
				[name]: value
			}
		});
	}

	async function formSubmission(event) {

		event.preventDefault();
		await axios.post(`user/collaborate`, {
			userEmail: userEmail,
			token: localStorage.getItem('token')
		}).then((res) => {
			if (res.status === 200) {
				alert.success(res.data.msg);
				setUserEmail("");
				history.replace('/thankyou')
			}
		}).catch((error) => {
			if (error.response.status === 404) {
				alert.error(error.response.data.msg);
			} else if (error.response.status === 409) {
				alert.error(error.response.data.msg);
			} else if (error.response.status === 403) {
				alert.error(error.response.data.msg);
				setUserEmail("");
			} else {
				history.push("/error");
			}
		});
	}

	return <footer>
		<div>
			<Navbar className={styles.navbar}>
				<Container style={{ position: "absolute", top: '12%', marginLeft: "9%" }}>
					<Nav className="me-auto  justify-content-between w-100">
						<Nav.Link href="#home" className={styles.footerText}>EXPLORE</Nav.Link>
						<Nav.Link href="/comingSoon" className={styles.footerText}>COMMUNITY</Nav.Link>
						<Nav.Link href="#categories" className={styles.footerText}>CATEGORIES</Nav.Link>
						<div>
							<img className={styles.logo} src="./images/icon.svg" alt="" />
							<p className={styles.logoText}>foodHeaven</p>
						</div>
						<Nav.Link href="/comingSoon" className={styles.footerText}>ABOUT US</Nav.Link>
						<Nav.Link href="/comingSoon" className={styles.footerText}>CONTACT US</Nav.Link>
						<Nav.Link href="/feedback" className={styles.footerText}>GIVE FEEDBACK</Nav.Link>
					</Nav>
				</Container>
				<hr className={styles.line}></hr>
				<div className={styles.form}>
					<p className={styles.formText}>Wanna Collaborate With Us ? Drop Your Email and we will reach you soon!</p>
					<form onSubmit={formSubmission}>
						<input className={styles.input} type="email" name="email" placeholder="Email Address" onChange={InputHandler}></input>
						<button type="submit" className={styles.button}><p className={styles.buttonText}>Submit</p></button>
					</form>
				</div>
				<p className={styles.copyright}>© AryanManasInc. 2021. We love our users!</p>
			</Navbar>
		</div>

	</footer>
}

export default Footer;