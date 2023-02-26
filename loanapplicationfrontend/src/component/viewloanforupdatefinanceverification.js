import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const ViewLoanUpdateFinanceVerification = (props) => {
    const location= useLocation();
    console.log(location.state.applicationId);
   const navigate = useNavigate();
   
   const handleSubmit = async (e) => {
    e.preventDefault();   
            navigate("/financeverificationupdate",{state:location.state});
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
          <p>Time Needed to Return the Loan (In Year): {location.state.neededtimetoreturn}</p>
         <p>Loan Applied Amount: {location.state.loanAppliedAmount} </p>
         <p>Loan Approved Amount: {location.state.loanApprovedAmount} </p>
         <p>Land Verification Approval: {location.state.landVerificationApproval} </p>
         <p>Finance Verification Approval: {location.state.financeVerificationApproval} </p>
         <p>Manager Approval: {location.state.adminApproval} </p>
         <p>Over All Status: {location.state.status} </p>
            <Link  onClick={handleSubmit} to="/financeverificationupdate">
            <button class="btn btn-outline-success" >Update</button><br/><br/>
            </Link>
            <Link to="/searchloanforupdatethefinanceverification">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};

export default ViewLoanUpdateFinanceVerification ;
