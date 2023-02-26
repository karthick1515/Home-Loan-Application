import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CustomerDetails = (props) => {
  const location = useLocation();
  console.log(location.state);

  const navigate = useNavigate();
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const value = props;
    console.log(value.data);

    navigate("/update", { state: location.state });
  };
  const handleBackSubmit = (event) => {
    event.preventDefault();
    const value = props;
    console.log(value.data);

    navigate("/dashboard", { state: location.state });
  };
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
          <h4>Profile</h4>
          <p>Customer Id: {location.state.customerId} </p>
          <p>Email: {location.state.emailId} </p>
          <p>Name : {location.state.customerName} </p>
          <p>Mobile Number: {location.state.mobileNumber} </p>
          <p>Date Of Birth: {location.state.dateOfBirth} </p>
          <p>Gender : {location.state.gender} </p>
          <p>Nationality: {location.state.nationality} </p>
          <p>Aadhar Number: {location.state.aadharNumber} </p>
          <p>PanNumber : {location.state.panNumber} </p>

          <Link onClick={handleUpdateSubmit} to="/update">
            <button class="btn btn-outline-success">Update</button>
            <br />
            <br />
          </Link>
          <Link onClick={handleBackSubmit} to="/dashboard">
            <button class="btn btn-outline-danger">Back</button>
            <br />
            <br />
          </Link>
        </div>
      </center>
    </>
  );
};

export default CustomerDetails;
