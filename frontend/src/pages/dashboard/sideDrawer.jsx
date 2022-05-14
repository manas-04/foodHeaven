import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";
import { Nav } from 'react-bootstrap';
import {
	DrawerNavigationHeader,
	DrawerNavigation,
} from 'react-bootstrap-drawer';
import { useAlert } from 'react-alert';
import { useHistory } from "react-router-dom";

import styles from "./dashboardDrawer.module.css";

function SideDrawer(props){

	const alert = useAlert();
	const history = useHistory();

	const logoutHandler = async () => {
		await axios.post(`user/logout`,{
			token:localStorage.getItem("token"),
		}).then((res)=>{
			if(res.status === 200 ){
				history.replace("/");
				alert.success(res.data.msg);
				localStorage.setItem('token',"");
			}
		}).catch((error)=>{
			if(error.response.status === 500 || error.response.status === 409){
				localStorage.setItem('token',"");
				history.replace("/");
				alert.success("Successfully Logged Out.");
			}else if(error.response.status === 404){
				alert.error("Invalid User.");
			}
		})
	}

    function ListItem(props){
		return <Nav.Item onClick={props.onClick}>
		<Nav.Link href={props.redirectLink} className={styles.sideDrawerText}>
			<img src={props.imageUrl} className={styles.sideDrawerImages} alt="" />
			{props.Item}
		</Nav.Link>
	</Nav.Item>
	}

	return (
		<div>
		{
		props.visible?
			<div className={styles.sideDrawer}>
				<DrawerNavigationHeader className={styles.drawer}>
					<div className={styles.headingDiv}>
						<img src="./images/icon.svg" className={styles.images}style={{height:50+"px"}} alt="" />
						<p style={{marginBottom:0+"px"}} className={styles.title} >foodHeaven</p>
						<div style={{marginLeft:15+"px",marginTop:19+"px"}}>
							<Zoom in={props.visible}>
								<div className={styles.close}>
									<CloseIcon onClick={props.changeVisibility}/>
								</div>
							</Zoom>
						</div>
					</div>
					<center>
						<hr 
							className={styles.hr} 
							style={{marginLeft:15+"px",marginRight:15+"px",marginBottom:1+"px",marginTop:17+"px"}}	
						/>
					</center>
				</DrawerNavigationHeader>
				<DrawerNavigation>
					<ListItem redirectLink="/" imageUrl="./images/cottage_black_24dp.svg" Item="Home" onClick={props.changeVisibility}/>
					<ListItem redirectLink="/" imageUrl="./images/explore_black_24dp.svg" Item="Explore" onClick={props.changeVisibility}/>
					<ListItem redirectLink="#categories" imageUrl="./images/categories.svg" Item="Categories" onClick={props.changeVisibility}/>
					<ListItem redirectLink="/" imageUrl="./images/history.svg" Item="History" onClick={props.changeVisibility}/>
					<ListItem redirectLink="/" imageUrl="./images/diary-1118.svg" Item="View Saved Recipies" onClick={props.changeVisibility}/>
					<center>
						<hr 
							className={styles.hr} 
							style={{marginLeft:15+"px",marginRight:15+"px",marginBottom:8+"px",marginTop:17+"px"}}
						/>
					</center>
					<ListItem redirectLink="/" imageUrl="./images/profile.svg" Item="Manage Profile" onClick={props.changeVisibility}/>
					<Nav.Item onClick={props.changeVisibility}>
						<Nav.Link href="/feedback" className={styles.sideDrawerText}>
							<img src="./images/feedback.svg" className={styles.sideDrawerImages} alt="" />
							Give Feedback
						</Nav.Link>
					</Nav.Item>
					<ListItem redirectLink="/" imageUrl="./images/question-answer-5528.svg" Item="About Us" onClick={props.changeVisibility}/>
					<Nav.Item onClick={props.changeVisibility}>
						<Nav.Link className={styles.sideDrawerText} onClick={logoutHandler}>
							<img src="./images/logout.svg" className={styles.sideDrawerImages} alt="" />
							Sign Out
						</Nav.Link>
					</Nav.Item>
					<center>
						<hr 
							className={styles.hr} 
							style={{marginLeft:15+"px",marginRight:15+"px",marginBottom:8+"px",marginTop:17+"px"}}
						/>
					</center>
				</DrawerNavigation>
			</div>
				:null}
		</div>

	);
}

export default SideDrawer;