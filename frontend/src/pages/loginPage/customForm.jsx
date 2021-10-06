import React,{useState} from "react";
import { Form , Button } from "react-bootstrap";
import style from "./loginPage.module.css";
import axios from "axios";
import { useHistory } from "react-router";
import { useAlert } from 'react-alert';

function LoginForm(){
    
    const history = useHistory();
    const alert = useAlert();
    const [userDetails,setUserDetails] = useState({
        email:"",
        password:"",
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
        await axios.post(`/user/login`,{
            user:userDetails
        }).then((res)=>{
            console.log(res.status);
            if(res.status == 200){
                localStorage.setItem('token', res.data.token);
            }
            setTimeout(() => {
                history.push("/dashboard");              
            }, 1000);
        }).catch((error) => {
            if(error.response.status === 401){
                alert.error("Invalid Email or Password");
            }else if(error.response.status === 404){
                alert.error("User Not Found");
            }else if(error.response.error === 500){
                history.push("/error");
            }
        });
    }

    return <Form onSubmit={formSubmission}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={InputHandler} name="email" required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={InputHandler} name="password" required/>
        </Form.Group>
        <div className={style.forgotPassLink}>
            <a href="/forgotPassword"> Forgot Password? </a>
        </div>
        <center>
            <Button type="submit" className={style.loginBtn} >
                Sign In
            </Button>
        </center>
        <div className={style.newAccountLink}>
            <p>   
                Not Registered yet ? 
                <a href= "/register"> Create an Account </a>
            </p> 
        </div>
    </Form>
}

export default LoginForm;