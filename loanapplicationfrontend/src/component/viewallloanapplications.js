import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoanApplicationTable from '../services/loanapplicationtable';


const ViewAllLoanApplication = () => {
  const [loanapplications, setLoanapplications] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/loanapplication/viewallloan")
      .then(response => setLoanapplications(response.data))
      .catch(error => console.log(error));
  }, []);
  return (<center>
    <div>
      <h1>All Loan Applications</h1>
      <LoanApplicationTable loanapplications={loanapplications} />
      <Link  to="/managerdashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </div></center>
  );
};
export default ViewAllLoanApplication;