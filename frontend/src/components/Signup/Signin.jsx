import { useState } from 'react'
import React from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { authActions } from '../../store';
// import HeadingComp from './HeadingComp';



const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [Inputs,setInputs] = useState({
    "email":"",
    "password":"",
});
const change =(e)=>{
  const {name,value}=e.target;
  setInputs({...Inputs,[name]:value});
};

const submit = async (e) =>
  {
      e.preventDefault();
      try {
        const response=await axios.post('http://localhost:5000/api/v1/signin',Inputs)
      console.log(response.data);
        if(response.data )
          {
            sessionStorage.setItem("id",response.data.user._id)
            dispatch(authActions.login())
        history('/todo')

          }
          else{
            console.error("Response data _id not found in the response ");
          }
        
      } catch (error) {
        console.error("an error occured:",error)
        
      }
    }
  return (
    <div className="login_container">
    <form className='login-popup-container'>
    <div className="form-box">
    <h1 id="title">Sign In</h1>
    </div>
    <div className='login-popup-inputs'>
         
            <input type="email"
            name='email'
             placeholder="Enter Your Email" required
             value={Inputs.email}
             onChange={change} 

             />
            <input type="password"
            name='password'
             placeholder="Enter Your Password"required
             value={Inputs.password}
             onChange={change} 

             />
    </div>
    <div className='login-popup-condition'>
        <input type="checkbox" required/>
        <p> By continuing,i agree to the terms of use & privacy policy.</p>
    </div>
    <button onClick={submit}>Sign in</button>
   
    </form>
    </div>

  )
}

export default Signin
