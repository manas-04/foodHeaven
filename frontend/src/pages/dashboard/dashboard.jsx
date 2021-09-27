import React, { useState } from 'react';
import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import Banner from "./banner";
import { useHistory } from "react-router-dom";


function Dashboard(props) {
	const [isVisible, setVisible] = useState(false);

	function changeVisibility() {
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

	const [open, setOpen] = React.useState(false);
	let history = useHistory();

	const handleClickOpen = () => {
		setOpen(true);
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
		<div>
			<SideDrawer visible={isVisible} changeVisibility={changeVisibility} />
		</div>
		<Banner handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep} />
		<Footer />
	</div>)
}


export default Dashboard;