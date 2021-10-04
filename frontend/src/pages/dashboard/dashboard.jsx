import React ,{useState} from 'react';
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import SweetSection from './sweetsSection';
import Banner from "./banner";
import CategoriesSection from "./categoriesSection";
import ArticleSection from './articles';
import Slider from './slider';


function Dashboard(props){

	const[isVisible,setVisible]=useState(false);	
	const [open, setOpen] = React.useState(false);
	let history = useHistory();

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

	  const handleClickOpen = () => {
		  setOpen(!open);
	  };
  
	  const [searchedItem, setsearchedItem] = useState(props.itemSearched);
  
	  function inputHandler(event) {
		  setsearchedItem(event.target.value);
	  }
  
	  function handleClose(){
		  history
			  .push("/search", {
				  searchedItem: searchedItem,
			  });
		  window.location.reload();
	  };

	return (<div> 
		<CustomNavbar visible={isVisible} changeVisibility={changeVisibility} open={open} handleClickOpen={handleClickOpen}
			handleClose={handleClose} searchedItem={searchedItem} inputHandler={inputHandler}
		/>
	    <SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
		<Banner handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep}/>
		<SweetSection />
		<Slider />
		<ArticleSection />
		<CategoriesSection />

		<Footer />
	</div>)
}


export default Dashboard;