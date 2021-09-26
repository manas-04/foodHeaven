import React ,{useState} from 'react';


import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import SweetSection from './sweetsSection';

import {Button} from "react-bootstrap";

function Dashboard()
{
	const[isVisible,setVisible]=useState(false);

	function changeVisibility()
	{
		setVisible(!isVisible);
	}

	return (<div> 
		<CustomNavbar  visible={isVisible} changeVisibility={changeVisibility} />
	    <SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
		<SweetSection />
		<Footer />
	</div>)
}


export default Dashboard;