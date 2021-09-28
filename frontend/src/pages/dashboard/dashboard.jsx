import React ,{useState} from 'react';

import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import SweetSection from './sweetsSection';
import Banner from "./banner";
import CategoriesSection from "./categoriesSection";
import ArticleSection from './articles';


function Dashboard(){

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
		<CustomNavbar  visible={isVisible} changeVisibility={changeVisibility} />
	    <SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
		<Banner handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep}/>
		<SweetSection />
		<ArticleSection />
		<CategoriesSection />
		<Footer />
	</div>)
}


export default Dashboard;