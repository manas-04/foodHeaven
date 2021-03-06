import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styles from "./footer.module.css";

function Footer() {
	return <footer>
		<div>
			<Navbar className={styles.navbar}>
				<Container style={{position:"absolute",top:'12%',marginLeft:"4.5%"}}>
					<Nav className="me-auto  justify-content-between w-100">
						<Nav.Link href="#home" className={styles.footerText}>EXPLORE</Nav.Link>
						<Nav.Link href="#home" className={styles.footerText}>COMMUNITY</Nav.Link>
						<Nav.Link href="#home" className={styles.footerText}>CATEGORIES</Nav.Link>
						<div>
						<img className={styles.logo} src="./images/icon.svg" alt=""/>
							<p className={styles.logoText}>foodHeaven</p>
						</div>
						<Nav.Link href="#features" className={styles.footerText}>ABOUT US</Nav.Link>
						<Nav.Link href="#home" className={styles.footerText}>CONTACT US</Nav.Link>
						<Nav.Link href="/feedback" className={styles.footerText}>FEEDBACK</Nav.Link>
					</Nav>
				</Container>
				<hr className={styles.line}></hr>
						<div className={styles.form}>
							<p className={styles.formText}>Wanna Collaborate With Us ? Drop Your Email and we will reach you soon!</p>
							<form>
								<input className={styles.input} type="email" name="email" placeholder="Email Address"></input>
								<button type="submit" className={styles.button}><p className={styles.buttonText}>Submit</p></button>
							</form>
						</div>
						<p className={styles.copyright}>© AryanManasInc. 2021. We love our users!</p>
			</Navbar>
		</div>

	</footer>
}

export default Footer;