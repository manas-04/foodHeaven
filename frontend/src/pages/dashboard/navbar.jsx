import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import styles from "./navbar.module.css";

function CustomNavbar(props) {

  return <div className={styles.mainDiv}>
    <div>
      <Navbar expand="lg" sticky="top" style={{ width: "85%" }}>
        <Container style={{ marginLeft: "4%" }}>
          <Navbar.Brand onClick={props.changeVisibility}>
            <img className={styles.menu} src="./images/menu.svg" />
            <p className={styles.menuText}>MENU</p>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home"><img className={styles.logo} src="./images/icon.svg" />
              <p className={styles.logoText}>foodHeaven</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Button onClick={props.handleClickOpen}
          sx={{
            position: "absolute",
            top: "15.2%",
            left: "89%",
          }}>
          <img src="./images/search.svg" alt="Search" />
        </Button>
        <Dialog open={props.open} onClose={props.handleClickOpen}
          sx={{
            ".MuiPaper-root": {
              maxWidth: 700,
              width: 700,
              height: 150,
              alignItems: "center",
              borderRadius: 10,
              display: "inline-block",
            }
          }}
        >
          <DialogTitle
            style={{ display: "flex",
            alignSelf: "flex-start",
            marginLeft: "230px",
            fontWeight:"bold",
            fontFamily:"ubuntu" ,
            fontSize:24,
            color:"wheat"
            }}
          >Type To Search</DialogTitle>
          <DialogContent style={{ display: "flex", alignContent: "center", width: "90%", marginLeft: "10px", position: "relative"}}>
            <TextField
              autoFocus
              margin="dense"
              fullWidth
              variant="standard"
              placeholder="Search Recipes"
              value={props.searchedItem}
              onChange={props.inputHandler}
            />
          </DialogContent>
          <DialogActions> 
            <Button style={{ position: "absolute", bottom: "35%" }} onClick={props.handleClose} name="Search">
              <img src="./images/search.svg" alt="Search" />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <img className={styles.profile} src="./images/profile.svg" alt="Profile" />
    </div>
    <hr className={styles.line}></hr>
    <div>
      <Navbar sticky="top" expand="lg" >
        <Container className={styles.navText}>
          <Nav className="me-auto justify-content-between w-100 " >
            <Nav.Link href="#categories" className={styles.text}>Categories
              <img className={styles.arrow} src="./images/arrow_forward.svg" />
            </Nav.Link>
            <Nav.Link href="#link" className={styles.text}>Favouried
              <img className={styles.arrow} src="./images/arrow_forward.svg" />
            </Nav.Link>
            <Nav.Link href="#article">Articles
              <img className={styles.arrow} src="./images/arrow_forward.svg" />
            </Nav.Link>
            <Nav.Link href="#link">Features
              <img className={styles.arrow} src="./images/arrow_forward.svg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  </div>
}


export default CustomNavbar;