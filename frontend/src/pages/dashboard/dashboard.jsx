import React,{useState} from 'react';
import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';


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
		<Footer />
	</div>)
}


export default Dashboard;