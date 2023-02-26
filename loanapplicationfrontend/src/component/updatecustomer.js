import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdateDetails from "../services/updatecustomerdetails";

function Update(props) {
  const location = useLocation();
  const [data, setData] = useState({
    customerId: location.state.customerId,
    emailId: location.state.emailId,
    password: location.state.password,
    customerName: location.state.customerName,
    mobileNumber: location.state.mobileNumber,
    dateOfBirth: location.state.dateOfBirth,
    gender: location.state.gender,
    nationality: location.state.nationality,
    aadharNumber: location.state.aadharNumber,
    panNumber: location.state.panNumber,
  });

  //const {customerId,emailId,password,customerName,mobileNumber,dateOfBirth,gender,nationality,aadharNumber,panNumber}=data;//destructuring
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const value = UpdateDetails(data);

    console.log("value---" + value);

    value.then(function (response) {
      if (
        response.data.customerId !== "" ||
        response.data.customerId !== null
      ) {
        navigate("/customerdetails", { state: response.data });
      }
      console.log(response.data);
    });
  };

  const submitCancelHandler = (e) => {
    e.preventDefault();
    navigate("/customerdetails", { state: location.state });
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
      <div>
        <center>
          <form onSubmit={submitHandler}>
            <h4>Customer Details</h4>
            <label>CustomerId</label>
            <br />
            <input
              type="text"
              name="customerId"
              value={data.customerId}
              onChange={changeHandler}
              readOnly
            />{" "}
            <br />
            <label>EmailId</label>
            <br />
            <input
              type="text"
              name="emailId"
              value={data.emailId}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>Name</label>
            <br />
            <input
              type="text"
              name="customerName"
              value={data.customerName}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>MobileNumber</label>
            <br />
            <input
              type="number"
              name="mobileNumber"
              value={data.mobileNumber}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>Date Of Birth</label>
            <br />
            <input
              type="text"
              name="dateOfBirth"
              value={data.dateOfBirth}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>Gender</label>
            <br />
            <input
              type="text"
              name="gender"
              value={data.gender}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>Nationality</label>
            <br />
            <input
              type="text"
              name="nationality"
              value={data.nationality}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>AadharNumber</label>
            <br />
            <input
              type="number"
              name="aadharNumber"
              value={data.aadharNumber}
              onChange={changeHandler}
            />{" "}
            <br />
            <label>PanNumber</label>
            <br />
            <input
              type="text"
              name="panNumber"
              value={data.panNumber}
              onChange={changeHandler}
            />{" "}
            <br />
            <br />
            <input
              class="btn btn-outline-success"
              type="submit"
              name="submit"
              value="Update"
            />
            <br />
            <Link onClick={submitCancelHandler} to="/dashboard">
              <br />
              <button class="btn btn-outline-danger">Cancel</button>
              <br />
              <br />
            </Link>
          </form>
        </center>
      </div>
    </>
  );
}

export default Update;
