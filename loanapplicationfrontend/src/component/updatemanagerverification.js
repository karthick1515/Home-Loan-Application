import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import UpdateLoanApproval from '../services/updateloanapprovals';

const  ManagerVerificationOfficerUpdate = (props) => {
    const location= useLocation();
    console.log(location.state);
    console.log(location.state.applicationId);
    const [data,setData] = useState({
        applicationId:location.state.applicationId,
        applicationDate:location.state.applicationDate,
        customerId:location.state.customerId,
        loanAppliedAmount:location.state.loanAppliedAmount,
        loanApprovedAmount:location.state.loanApprovedAmount,
        landVerificationApproval:location.state.landVerificationApproval,
        financeVerificationApproval:location.state.financeVerificationApproval,
        adminApproval:location.state.adminApproval,
        status:location.state.status,
        customerAddress:location.state.customerAddress,
        occupation:location.state.occupation,
        annualSalary:location.state.annualSalary,
        companyAddress:location.state.companyAddress,
        neededtimetoreturn:location.state.neededtimetoreturn
    });

    //const {customerId,emailId,password,customerName,mobileNumber,dateOfBirth,gender,nationality,aadharNumber,panNumber}=data;//destructuring
    const changeHandler = e => {
        setData({
                 ...data,[e.target.name]: e.target.value,         
        });
    };
   
    const navigate = useNavigate();
            const submitHandler = async (e) => {
            e.preventDefault();
            console.log(data);
            try {
              const response = await (UpdateLoanApproval(data));
              console.log("response---", response);
            
              if (response.data.customerId !== "" || response.data.customerId !== null) {
                navigate("/viewloanformanagerverification", { state: response.data });
                console.log(response.data);
              }
            } catch (error) {
             
                alert("An error occurred while submitting the form enter the valid approval");
      
            }
          };

        const submitCancelHandler = e=>{
          console.log(data);
            e.preventDefault();              
                    navigate("/viewloanformanagerverification",{state:location.state});
    }

    return(
        <div><center>
            <form onSubmit={submitHandler}>
            <label>Application Id</label><br />
                <input type="text" name="applicationId" value={data.applicationId}  onChange={changeHandler} readOnly/> <br />
            <label>Customer Id</label><br />
                <input type="text" name="customerId" value={data.customerId}  onChange={changeHandler} readOnly/> <br />
                <label>Applied Date</label><br />
                <input type="text" name="applicationDate" value={data.applicationDate} onChange={changeHandler} readOnly/> <br />
                <label>Loan Applying Amount</label><br />
                <input type="text" name="loanAppliedAmount" value={data.loanAppliedAmount} onChange={changeHandler} readOnly/> <br />
                <label>Customer Address</label><br />
                <input type="text" name="customerAddress" value={data.customerAddress} onChange={changeHandler} readOnly/> <br />
                <label>Occupation</label><br />
                <input type="text" name="occupation" value={data.occupation} onChange={changeHandler} readOnly/> <br />
                <label>Annual Salary</label><br />
                <input type="text" name="annualSalary" value={data.annualSalary} onChange={changeHandler} readOnly/> <br />
                <label>Company Address</label><br />
                <input type="text" name="companyAddress" value={data.companyAddress} onChange={changeHandler} readOnly/> <br />
                <label>Needed Time to Return the Loan(In Year)</label><br />
                <input type="text" name="neededtimetoreturn" value={data.neededtimetoreturn} onChange={changeHandler} readOnly/> <br />
                <label>Loan Approved Amount</label><br />
                <input type="text" name="loanApprovedAmount" value={data.loanApprovedAmount} onChange={changeHandler} /> <br />
                <label>Land Verification Approval</label><br />
                <input type="text" name="landVerificationApproval" value={data.landVerificationApproval} onChange={changeHandler} /> <br/>
                <label>Finance Verification Approval</label><br/>
                <input type="text" name="financeVerificationApproval" value={data.financeVerificationApproval} onChange={changeHandler} readonly/> <br />
                <label>Manager Approval</label><br />
                <input type="text" name="adminApproval" value={data.adminApproval} onChange={changeHandler} /> <br />
                <label>Overr All Status</label><br />
                <input type="text" name="status" value={data.status} onChange={changeHandler} /> <br />
                <input class="btn btn-outline-success" type="submit" name="submit" value="Submit"/>
                <Link onClick={submitCancelHandler}  to="/viewloanformanagerverification">
            <button class="btn btn-outline-danger">Cancel</button><br/><br/>
            </Link>
            <p>Note:you can update only Manager Verification,Approved amount,Over all Status  </p>
            </form></center>
        </div>
    );
    }

export default ManagerVerificationOfficerUpdate;