import axios from 'axios';
import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";
import Table from '../services/customerstable';
const ViewAllCustomer = () => {
  const [customers, setCustomers] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/customer/viewAllcustomers")
      .then(response => setCustomers(response.data))
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
      <h1>All Customers</h1>
      <Table customers={customers} />
      <Link  to="/managerdashboard">
            <button class="btn btn-outline-success">Go Back</button><br/><br/>
            </Link>
    </div></center>
    </>
  );
};
export default ViewAllCustomer;