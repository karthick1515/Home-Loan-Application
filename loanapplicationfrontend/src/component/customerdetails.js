import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const CustomerDetails = (props) => {
  
  const location= useLocation();
    console.log(location.state);
    
    const navigate = useNavigate();
    const handleUpdateSubmit = event=> {
      event.preventDefault();
    const value=props;
     console.log(value.data);     
    
           navigate("/update",{state:location.state});
    };
    const handleBackSubmit = event=> {
      event.preventDefault();
    const value=props;
     console.log(value.data);     
    
           navigate("/dashboard",{state:location.state});
    };
  return (
    <><center>
    <div>
         <h4>Profile</h4>
       <p>Customer Id: {location.state.customerId} </p>
      <p>Email: {location.state.emailId} </p>
      <p>Name : {location.state.customerName} </p>
      <p>Mobile Number: {location.state.mobileNumber} </p>
      <p>Date Of Birth: {location.state.dateOfBirth} </p>
      <p>Gender : {location.state.gender} </p>
      <p>Nationality: {location.state.nationality} </p>
      <p>Aadhar Number: {location.state.aadharNumber} </p>
      <p>PanNumber : {location.state.panNumber} </p>
     
      <Link onClick={handleUpdateSubmit} to="/update">
            <button class="btn btn-outline-success">Update</button><br/><br/>
            </Link>
            <Link onClick={handleBackSubmit}  to="/dashboard">
            <button class="btn btn-outline-danger">Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};

export default CustomerDetails;

