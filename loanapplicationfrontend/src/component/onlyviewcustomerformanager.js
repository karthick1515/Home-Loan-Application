import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
const OnlyViewCustomerDetailsForManagerOfficer = (props) => {
    const location= useLocation();
    console.log(location.state);
     return (
    <><center>
    <div>
     
         <p>CustomerDetails</p>
       <p>Customer Id: {location.state.customerId} </p>
      <p>Email: {location.state.emailId} </p>
      <p>Name : {location.state.customerName} </p>
      <p>Mobile Number: {location.state.mobileNumber} </p>
      <p>Date Of Birth: {location.state.dateOfBirth} </p>
      <p>Gender : {location.state.gender} </p>
      <p>Nationality: {location.state.nationality} </p>
      <p>Aadhar Number: {location.state.aadharNumber} </p>
      <p>PanNumber : {location.state.panNumber} </p>
      
      
            <Link  to="/searchcustomerforupdatemanagerverification">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};

export default OnlyViewCustomerDetailsForManagerOfficer;

