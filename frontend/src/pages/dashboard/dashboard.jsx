import React ,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useAlert } from 'react-alert';
import {BeatLoader} from "react-spinners";

import CustomNavbar from './navbar';
import Footer from "./footer";
import SideDrawer from './sideDrawer';
import SweetSection from './sweetsSection';
import Banner from "./banner";
import CategoriesSection from "./categoriesSection";
import ArticleSection from './articles';
import Slider from './slider';
import styles from "./loader.module.css";


function Dashboard(props){

	const alert = useAlert();
	let history = useHistory();
	const [isLoading,setLoading] = useState(true);
	const [isVisible,setVisible]=useState(false);	
	const [searchedItem, setsearchedItem] = useState(props.itemSearched);
	const [activeStep, setActiveStep] = useState(0);
	const [open, setOpen] = useState(false);

	const handleNext = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1);};
	const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1);};
	const handleStepChange = (step) => {setActiveStep(step);};
	const handleClickOpen = () => {setOpen(!open);};

	useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.post(`user/validate`,{
			token:localStorage.getItem("token")
		}).then((res)=>{
			if(res.status === 200){
				setTimeout(() => {
					setLoading(false);
					alert.success("Successfully Logged In");
				},1500);
			}	
        }).catch((error) => {
			setTimeout(() => {
				setLoading(false);
				if(error.response.status === 403){
					alert.error("Something went wrong, please, Login Again.");
					history.replace("/");
				}else if(error.response.error === 500){
					history.replace("/error");
				}
			},1500);
        }); 
    };
  
	function changeVisibility(){
		setVisible(!isVisible);
	}

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
		{isLoading?
			<div className={styles.mainDiv}>
                <center>
                    <div className={styles.container}>
                        <img alt=" " src="../images/dataProcessing.svg" className={styles.image}/>
                        <p style={{fontSize:34}}>
                            Processing your request ...
                        </p>
                        <BeatLoader loading />
                    </div>
                </center>
            </div>
			:<div>
				<CustomNavbar 
					visible={isVisible} 
					changeVisibility={changeVisibility} 
					open={open} 
					handleClickOpen={handleClickOpen}
					handleClose={handleClose} 
					searchedItem={searchedItem} 
					inputHandler={inputHandler}
				/>
				<SideDrawer visible={isVisible} changeVisibility={changeVisibility}/>
				<Banner handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep}/>
				<SweetSection />
				<Slider />
				<ArticleSection />
				<CategoriesSection />
				<Footer />
			</div>
		}
		
	</div>)
}


export default Dashboard;