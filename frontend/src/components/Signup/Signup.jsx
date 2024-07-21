import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import "./Signup.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import HeadingComp from './HeadingComp';
const Signup = () => {
    const history = useNavigate();
    const [Inputs,setInputs] = useState({
    "email":"",
    "username":"",
    "password":"",
});
    const change =(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    };

    const submit = async (e) =>
        {
            e.preventDefault();
            await axios.post(`http://localhost:5000/api/v1/register`,Inputs)
            .then((response)=>{
                //automatically redirect to signin after signup
                if(response.data.message === 'User Already Exist'){
                    alert(response.data.message);

                }
                else{
                    alert(response.data.message);

                    setInputs({
                        "email":"",
                        "username":"",
                        "password":"",
                    })
                    history('/signin')
                }
                

            })
            // console.log(Inputs);
            
        }
  return (
    <div className="login_container">
    <form className='login-popup-container'>
    <div className="form-box">
    <h1 id="title">Sign Up</h1>
    </div>
    <div className='login-popup-inputs'>
    <input type="text" 
    name='email'
        placeholder="Enter Your Email"
         required 
         onChange={change} 
         value={Inputs.email}
         />
        <input type="text"
        name='username' 
        placeholder="Enter Your Name" 
        required 
        onChange={change} 
        value={Inputs.username}
        />
        
        <input type="password"
        name='password'
         placeholder="Enter Your Password" 
         required 
         onChange={change} 
         value={Inputs.password}
         />
    </div>
    <div className='login-popup-condition'>
        <input type="checkbox" required/>
        <p> By continuing,i agree to the terms of use & privacy policy.</p>
    </div>
    <button onClick={submit}>Sign up</button>
    
    </form>
    </div>
  )
}

export default Signup

