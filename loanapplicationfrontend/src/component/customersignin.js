import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Senddetailsandretrivecustomer from '../services/signindetails';

const LoginForm = (props) => {
    const [logindata,setLogindata] = useState({
        emailId:"",
        password:""
    });

 const {emailId,password}=logindata;
const navigate = useNavigate();
    const changeHandler = e=>{
        setLogindata(
            {
                ...logindata,[e.target.name]: [e.target.value]
            }
        );
    }
    
  const handleSubmit = async(event)=> {
    event.preventDefault();

    try {
      const response=await(Senddetailsandretrivecustomer(logindata));
      if (response.data.customerId !== "" || response.data.customerId !== null) {
        navigate("/dashboard",{state:response.data});
        console.log(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("You already have account with this email try with another email");
      } else {
        alert("Enter the valid details as per the given instruction");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="emailId" value={emailId} onChange={changeHandler} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={changeHandler} />
      </label>
      <button type="submit">Submit</button>
      <Link  to="/">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </form>
  );
};

export default LoginForm;