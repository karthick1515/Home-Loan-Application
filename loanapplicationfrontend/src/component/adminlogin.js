import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Sendadminsigndetails from '../services/sendadminsigndetails';

const AdminLoginForm = (props) => {
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
    
    const value=Sendadminsigndetails(logindata);
    console.log(value);
  
    value.then(function(response){
          if(response.data.adminId !== "" || response.data.adminId !== null){
            navigate("/admindashboard",{state:response.data});
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
      <button type="submit">Submit</button><br/>
      <Link  to="/">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </form>
  );
};

export default AdminLoginForm;