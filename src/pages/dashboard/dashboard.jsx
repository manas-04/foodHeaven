import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {
	DrawerNavigationHeader,
	DrawerNavigation,
} from 'react-bootstrap-drawer';

import styles from "./dashboardDrawer.module.css";

function Dashboard(){

	return (
		<div className={styles.sideDrawer}>
			<DrawerNavigationHeader>
                <center>
                    <p className={styles.title}>foodHeaven</p>
                    <img src="./images/icon.svg" style={{height:100+"px"}}/>
                    <hr></hr>
                </center>
            </DrawerNavigationHeader>
			<DrawerNavigation>
				{ /* Standard react-bootstrap Nav.Item / Nav.Link */ }
				{ /* Caveat: CSS provides custom styles */ }
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link href="/settings">Settings</Nav.Link>
				</Nav.Item>
			</DrawerNavigation>
		</div>
	);
}

export default Dashboard;