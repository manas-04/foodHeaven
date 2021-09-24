import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Zoom from "@material-ui/core/Zoom";

import { Nav } from 'react-bootstrap';
import {
	DrawerNavigationHeader,
	DrawerNavigation,
} from 'react-bootstrap-drawer';

import styles from "./dashboardDrawer.module.css";

function SideDrawer(props){

    function ListItem(props){
		return <Nav.Item>
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
					<ListItem redirectLink="/" imageUrl="./images/cottage_black_24dp.svg" Item="Home" />
					<ListItem redirectLink="/" imageUrl="./images/explore_black_24dp.svg" Item="Explore" />
					<ListItem redirectLink="/" imageUrl="./images/categories.svg" Item="Categories" />
					<ListItem redirectLink="/" imageUrl="./images/history.svg" Item="History" />
					<ListItem redirectLink="/" imageUrl="./images/diary-1118.svg" Item="View Saved Recipies" />
					<center>
						<hr 
							className={styles.hr} 
							style={{marginLeft:15+"px",marginRight:15+"px",marginBottom:8+"px",marginTop:17+"px"}}
						/>
					</center>
					<ListItem redirectLink="/" imageUrl="./images/profile.svg" Item="Manage Profile" />
					<ListItem redirectLink="/" imageUrl="./images/feedback.svg" Item="Give Feedback" />
					<ListItem redirectLink="/" imageUrl="./images/question-answer-5528.svg" Item="About Us" />
					<ListItem redirectLink="/" imageUrl="./images/logout.svg" Item="Sign Out" />
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