import React from 'react';
import { Nav,Navbar,Container} from 'react-bootstrap';
import styles from "./navbar.module.css";

function CustomNavbar(props){
  
	return <div className={styles.mainDiv}>
    <div>
        <Navbar expand="lg" sticky="top" className={styles.navbar}>
          <Container>
            <Navbar.Brand onClick={props.changeVisibility}>
              <img className={styles.menu}src="./images/menu.svg"/>
              <p className={styles.menuText}>MENU</p>
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#home"><img className={styles.logo} src="./images/icon.svg"/>
              <p className={styles.logoText}>foodHeaven</p>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          <img className={styles.search} src="./images/search.svg"/>
          <img className={styles.profile} src="./images/profile.svg"/>
        </div>
          <hr className={styles.line}></hr>
        <div>
          <Navbar sticky="top" expand="lg" >
            <Container className={styles.navText}>
                <Nav className="me-auto justify-content-between w-100 ">
                <Nav.Link href="#categories"  className={styles.text}>Categories
                  <img className={styles.arrow} src="./images/arrow_forward.svg"/>
                </Nav.Link>  
                <Nav.Link href="#link"  className={styles.text}>Favouried
                  <img className={styles.arrow} src="./images/arrow_forward.svg"/>
                </Nav.Link>
                <Nav.Link href="#article">Food Articles
                  <img className={styles.arrow}  src="./images/arrow_forward.svg"/>
                </Nav.Link>
                <Nav.Link href="#link">Features
                  <img className={styles.arrow} src="./images/arrow_forward.svg"/>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
	    </div>
}


export default CustomNavbar;