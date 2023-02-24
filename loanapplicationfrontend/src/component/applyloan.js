import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import SendLoanApplicationDetails from '../services/loanapplicationdetails';

const  ApplyLoan = (props) => {
    const location= useLocation();
    console.log(location.state);
    const [data,setData] = useState({
        applicationId:location.state.customerId,
        applicationDate:"",
        customerId:location.state.customerId,
        loanAppliedAmount:"",
        loanApprovedAmount:0,
        landVerificationApproval:"PENDING",
        financeVerificationApproval:"PENDING",
        adminApproval:"PENDING",
        status:"PENDING",
        customerAddress:"",
        occupation:"",
        annualSalary:"",
         companyAddress:"",
        neededtimetoreturn:""

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
              const response = await SendLoanApplicationDetails(data);
              console.log("response---", response);
              if (response.data.customerId !== "" || response.data.customerId !== null) {
                navigate("/loanapplied", { state: location.state });
                console.log(response.data);
              }
            } catch (error) {
              if (error.response && error.response.status === 404) {
                alert("You can't submit the form because you already applied for the loan.");
              } else {
                alert("An error occurred while submitting the form.");
              }
            }
          };

        const submitCancelHandler = e=>{
            e.preventDefault();              
                    navigate("/dashboard",{state:location.state});
    }

    return(
        <div><center>
            <form onSubmit={submitHandler}>
            <label>Customer Id</label><br />
                <input type="text" name="applicationId" value={data.customerId}  onChange={changeHandler} readOnly/> <br />
                <label>Applied Date</label><br />
                <input type="text" name="applicationDate" value={data.applicationDate} onChange={changeHandler}/> <br />
                <label>Loan Applying Amount</label><br />
                <input type="number" name="loanAppliedAmount" value={data.loanAppliedAmount} onChange={changeHandler}/> <br />
                <label>Customer Address</label><br />
                <input type="text" name="customerAddress" value={data.customerAddress} onChange={changeHandler}/> <br />
                <label>Occupation</label><br />
                <input type="text" name="occupation" value={data.occupation} onChange={changeHandler}/> <br />
                <label>Annual Salary(In LPA)</label><br />
                <input type="number" name="annualSalary" value={data.annualSalary} onChange={changeHandler}/> <br />
                <label>Company Address</label><br />
                <input type="text" name="companyAddress" value={data.companyAddress} onChange={changeHandler}/> <br />
                <label>Needed Time to Return the Loan(In Year)</label><br />
                <input type="text" name="neededtimetoreturn" value={data.neededtimetoreturn} onChange={changeHandler}/> <br />
                <input type="submit" name="submit" value="Submit"/>
                <Link onClick={submitCancelHandler}  to="/dashboard">
            <button class="btn btn-outline-danger">Cancel</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
    }

export default ApplyLoan;