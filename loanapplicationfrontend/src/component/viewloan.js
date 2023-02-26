import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const LoanDetails = (props) => {
    const location= useLocation();
    const loancustomerId = location.state.customerId;
    console.log(location.state);
   const navigate = useNavigate();
   const handleBackSubmit = async (e) => {
    e.preventDefault();
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    const value=await(axios.post('http://localhost:8080/customer/viewbycustomerid',loancustomerId,customConfig));
    console.log(value);
            navigate("/dashboard",{state:value.data});
  };
  return (
    <><center>
    <div>
         <h4>Loan Application Details</h4>
         <p>Loan Application Id:{location.state.applicationId}</p>
         <p>Customer Id: {location.state.customerId} </p>
         <p> Application Date: {location.state.applicationDate} </p>
         <p>Customer Address: {location.state.customerAddress} </p>
          <p>Occupation: {location.state.occupation} </p>
          <p>Annual Salary in LPA: {location.state.annualSalary} </p>
          <p>Company Address: {location.state.companyAddress} </p>
          <p>Time Needed to Return the Loan In Year: {location.state.neededtimetoreturn}</p>
         <p>Loan Applied Amount: {location.state.loanAppliedAmount} </p>
         <p>Loan Approved Amount: {location.state.loanApprovedAmount} </p>
         <p>Land Verification Approval: {location.state.landVerificationApproval} </p>
         <p>Finance Verification Approval: {location.state.financeVerificationApproval} </p>
         <p>Manager Approval: {location.state.adminApproval} </p>
         <p>Over All Status: {location.state.status} </p>
            <Link onClick={handleBackSubmit}  to="/dashboard">
            <button class="btn btn-outline-danger">Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};

export default LoanDetails ;

