import React from "react";
import styles from "./error404.module.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

function ComingSoon() {
	const history = useHistory();

	function handleHome() {
		history.push("/");
	}

	return (
		<div className={styles.mainDiv}>
			<div id={styles.ComingSooncontainer}>
				<h1 style={{ paddingTop: "15px" }}>We are Coming Soon!</h1>
				<img
					src='./images/comingSoon.svg'
					alt='Coming Soon'
					id={styles.image}
				/>
				<h2>Sorry, the page you are looking for is under Construction</h2>
				<Button
					className={styles.button}
					onClick={handleHome}
					style={{ marginTop: "10px" }}>
					<span id='Return Home'>Return Home</span>
				</Button>
			</div>
		</div>
	);
}

export default ComingSoon;
