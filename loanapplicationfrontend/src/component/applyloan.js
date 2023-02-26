import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SendLoanApplicationDetails from "../services/loanapplicationdetails";

const ApplyLoan = (props) => {
  const location = useLocation();
  console.log(location.state);
  const [data, setData] = useState({
    applicationId: location.state.customerId,
    applicationDate: "",
    customerId: location.state.customerId,
    loanAppliedAmount: "",
    loanApprovedAmount: 0,
    landVerificationApproval: "PENDING",
    financeVerificationApproval: "PENDING",
    adminApproval: "PENDING",
    status: "PENDING",
    customerAddress: "",
    occupation: "",
    annualSalary: "",
    companyAddress: "",
    neededtimetoreturn: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    if (!data.applicationDate || !data.loanAppliedAmount || !data.customerAddress || !data.occupation || !data.annualSalary || !data.companyAddress || !data.neededtimetoreturn) {
      alert("Please fill all the fields.");
      const fields = ["applicationDate", "loanAppliedAmount", "customerAddress", "occupation", "annualSalary", "companyAddress", "neededtimetoreturn"];

  fields.forEach((field) => {
    const element = document.getElementsByName(field)[0];
    if (!element.value) {
      element.style.borderColor = "red";
      element.style.placeholderColor="red";
    }
  });
  return;
      
    }
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
        alert("Enter the valid information make sure you fill all the fields.");
      }
    }
  };

  const submitCancelHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard", { state: location.state });
  };

  return (
    <div>
      <center>
         <h4>Loan Application</h4> 
        <form onSubmit={submitHandler}>
          <label>Customer Id</label>
          <br />
          <input type="text"name="applicationId" value={data.customerId} onChange={changeHandler}
            readOnly
          />{" "}
          <br />
          <label>Applied Date</label>
          <br />
          <input
            type="text"
            name="applicationDate"
            value={data.applicationDate}
            onChange={changeHandler}
            placeholder="Format:yyyy-MM-dd"
          />{" "}
          <br />
          <label>Loan Applying Amount</label>
          <br />
          <input
            type="number"
            name="loanAppliedAmount"
            value={data.loanAppliedAmount}
            onChange={changeHandler}
            placeholder="enter the loan amount"
           
          />{" "}
          <br />
          <label>Customer Address</label>
          <br />
          <input
            type="text"
            name="customerAddress"
            value={data.customerAddress}
            onChange={changeHandler}
            placeholder="enter the loan address"
          />{" "}
          <br />
          <label>Occupation </label>
          <br />
          <input
            type="text"
            name="occupation"
            value={data.occupation}
            onChange={changeHandler}
            placeholder="enter the loan occupation"
          />{" "}
          <br />
          <label>Annual Salary(In LPA)</label>
          <br />
          <input
            type="number"
            name="annualSalary"
            value={data.annualSalary}
            onChange={changeHandler}
            placeholder="enter the loan annualSalary"
          />{" "}
          <br />
          <label>Company Address</label>
          <br />
          <input
            type="text"
            name="companyAddress"
            value={data.companyAddress}
            onChange={changeHandler}
            placeholder="enter the company address"
          />
          <br />
          <label>Needed Time to Return(In year)</label>
          <br />
          <input
            type="text"
            name="neededtimetoreturn"
            value={data.neededtimetoreturn}
            onChange={changeHandler}
            placeholder="enter needed time to return"
          />{" "}
          <br />
          <br />
          <button class="btn btn-outline-success" type="submit" >
            Apply Loan
          </button><br/><br/>
          <button class="btn btn-outline-danger" type="button" onClick={submitCancelHandler}>
            Cancel
          </button>
        </form>
      </center>
    </div>
  );
};
export default ApplyLoan;