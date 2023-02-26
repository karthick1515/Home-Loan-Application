import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const SearchLoanforFinanceVerificationUpdate = (props) => {
    const [customerId,setCustomerId] = useState("");

const navigate = useNavigate();
    const changeHandler = event=>{
        setCustomerId(event.target.value );
    }

  const handleSubmit = async(event)=> {

    event.preventDefault();
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        }
        try {
          const value=await(axios.post('http://localhost:8080/loanapplication/viewbycustomerid',customerId,customConfig));
          console.log("response---", value);
          if (value.data.customerId !== "" || value.data.customerId !== null) {
            navigate("/viewloanforfinanceverification",{state:value.data});
            console.log(value.data);
          }
        } catch (error) {
                      alert("The Entered Customer Does Not have Any Loan Application");
          }       
  };

  return (<center>
    <form onSubmit={handleSubmit}>
    <h4>Loan Search</h4>
      <label>
        Enter the CustomerId To Update Finance Verification In The Customer's Loan Application:
        <input type="text" name="customerId" value={customerId} onChange={changeHandler} />
      </label><br/><br/>
      
      <button class="btn btn-outline-success" type="submit">Search Loan Application</button><br/><br/>
      <Link  to="/financeofficerdashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </form></center>
  );
};

export default SearchLoanforFinanceVerificationUpdate;