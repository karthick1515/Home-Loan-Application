import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import SendLandverificationsigndetails from '../services/sendlandverificationsigndetails';

const LandVerificationOfficerLogin = (props) => {
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
    let hasEmptyFields = false;
    for (const key in logindata) {
      if (!logindata[key]) {
        const input = document.getElementsByName(key)[0];
        input.classList.add("empty-field");
        hasEmptyFields = true;
      } else {       
        const input = document.getElementsByName(key)[0];
        input.classList.remove("empty-field");
      }
    }
    if (hasEmptyFields) {
      alert("fill the email address and password");
      return;
    }
    try {
      const response=await(SendLandverificationsigndetails(logindata));
      if (response.data.landverifyId !== "" || response.data.landverifyId !== null) {
        navigate("/landofficerdashboard",{state:response.data});
        console.log(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Enter the Valid login details");
      } else {
        alert("Enter the valid login details");
      }
    }
    
  };
  return (
    <center>
    <form onSubmit={handleSubmit}>
    <br/><h4>Land Verification Officer Sign In</h4><br/>
      <label>Email:<br/><input type="text" name="emailId" value={emailId} onChange={changeHandler} placeholder="enter the emailId"/>
      </label><br/><br/>
      <label>Password:<br/><input type="password" name="password" value={password} onChange={changeHandler} placeholder="enter the password"/>
      </label><br/><br/><br/>
      <button type="submit" class="btn btn-light">Submit</button><br/><br/>
      <Link  to="/">
            <button class="btn btn-light">Go Back</button><br/><br/><br/>
            </Link>
    </form></center>
  );
};

export default LandVerificationOfficerLogin;