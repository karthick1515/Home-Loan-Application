import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import SendManagersigndetails from '../services/sendmanagersigndetails';

const ManagerLogin = (props) => {
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
    
    const value=SendManagersigndetails(logindata);
    console.log(value);
  
    value.then(function(response){
          if(response.data.financeverificationId !== "" || response.data.financeverificationId !== null){
            navigate("/managerdashboard",{state:response.data});
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

export default ManagerLogin;