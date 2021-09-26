import React from 'react';
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap';
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
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link"  className={styles.text}>Favouried
                <img className={styles.arrow} src="./images/arrow_forward.svg"/>
                </Nav.Link>
                  <Nav.Link href="#home">About Us
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