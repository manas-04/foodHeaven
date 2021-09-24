import React,{useState} from 'react';
import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';

import styles from "./sweets.module.css";


function Dashboard()
{
	const[isVisible,setVisible]=useState(false);

	function changeVisibility()
	{
		setVisible(!isVisible);
	}

	return (<div> 
	    <SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
		<CustomNavbar  visible={isVisible} changeVisibility={changeVisibility} />
		<div className={styles.sweetsCard}>
			<h1>Lets start</h1>
		</div>
		<Footer />
	</div>)
}


export default Dashboard;