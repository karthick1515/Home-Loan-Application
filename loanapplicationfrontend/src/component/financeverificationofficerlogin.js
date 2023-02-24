import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import SendFinanceverificationsigndetails from '../services/sendfinanceofficersigndetails';

const FinanceVerificationOfficerLogin = (props) => {
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
  const handleSubmit = event=> {
    event.preventDefault();
    
    const value=SendFinanceverificationsigndetails(logindata);
    console.log(value);
  
    value.then(function(response){
          if(response.data.financeverificationId !== "" || response.data.financeverificationId !== null){
            navigate("/financeofficerdashboard",{state:response.data});
        }
    
    });    
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
    </form>
  );
};

export default FinanceVerificationOfficerLogin;