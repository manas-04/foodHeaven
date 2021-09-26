import React,{useState} from 'react';
import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import Banner from "./banner";


function Dashboard()
{
	const[isVisible,setVisible]=useState(false);

	function changeVisibility()
	{
		setVisible(!isVisible);
	}

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	  };
	
	  const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	  };
	
	  const handleStepChange = (step) => {
		setActiveStep(step);
	  };

	return (<div> 
		<CustomNavbar visible={isVisible} changeVisibility={changeVisibility} />
		<div>
		<SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
		</div>
		<Banner handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep}/>
		<Footer />
	</div>)
}


export default Dashboard;