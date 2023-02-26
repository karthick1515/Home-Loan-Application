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
  return (
  <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            EHomeLoan
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/about">
                About
              </a>
              <a class="nav-link" href="/process">
                Process And Guidence
              </a>
            </div>
          </div>
        </div>
      </nav>
  <center>
    <div>
      <h1>All Loan Applications</h1>
      <LoanApplicationTable loanapplications={loanapplications} />
      <Link  to="/managerdashboard">
            <button class="btn btn-outline-success">Go Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};
export default ViewAllLoanApplication;