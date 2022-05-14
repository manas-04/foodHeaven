import axios from "axios";
import React,{useState} from "react";
import {Form , Button} from "react-bootstrap";
import { useHistory } from "react-router";
import { useAlert } from "react-alert";

import styles from "./feedback.module.css";

function Feedback(){

    const history = useHistory();
    const alert = useAlert();
    const [isSubmitted,setsubmission] = useState(false);
    const [userDetails,setUserDetails] = useState({
        name:"",
        email:"",
        feedback:""
    });

    function InputHandler(event){
        const {name,value} = event.target;

        setUserDetails((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        });
    }

    async function formSubmission(event){

        event.preventDefault();
        await axios.post(`user/feedback`,{
            userFeedback:userDetails
        }).then((res)=>{
            setsubmission(true);       
        }).catch((error)=>{
            alert.error("Something went Wrong.")
        })

        event.preventDefault();
        console.log(userDetails);
    }

    return <div className={styles.completePage}>
        <center>
            <div className={styles.container}>
                <img alt="" src="./images/feedbackImage.svg" className={styles.image}/>
                <div>
                    {isSubmitted
                        ?<div className={styles.remarkContainer}>
                            <p className={styles.thankYou}>
                                Thank You !
                            </p>
                            <p style={{fontSize:30,marginTop:0}}>
                                For your valueable feedback
                            </p>
                            <Button 
                                className={styles.button}
                                onClick={()=>{
                                    history.go(-1);
                                }}
                            >
                                <span id="GoBack">
                                    Go Back
                                </span>
                            </Button>
                        </div>
                        :<div>
                            <p className={styles.heading}>
                                Feedback Form
                            </p>
                            <p style={{width:"500px"}}>
                                We would love to hear your thoughts, suggestions, concerns or problems with anything so that we can improve.
                            </p>
                            <Form onSubmit={formSubmission}>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Control 
                                        type="name" 
                                        placeholder="Name" 
                                        name="name"
                                        onChange={InputHandler}    
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="E-mail" 
                                        name="email"   
                                        onChange={InputHandler} 
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Control
                                        as="textarea" 
                                        rows={4} 
                                        name="feedback"
                                        required
                                        style={{width:"500px"}}
                                        placeholder="Your Feedback"
                                        onChange={InputHandler}
                                    />
                                </Form.Group>
                                <Button type="submit" className={styles.btn}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    } 
                </div>
            </div>
        </center>
    </div>
}

export default Feedback;