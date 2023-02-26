import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Senddetailsandretrivecustomer from "../services/signindetails";

const LoginForm = (props) => {
  const [logindata, setLogindata] = useState({
    emailId: "",
    password: "",
  });

  const { emailId, password } = logindata;
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasEmptyFields = false;
    for (const key in logindata) {
      if (!logindata[key]) {
        const input = document.getElementsByName(key)[0];
        input.classList.add("empty-field");
        hasEmptyFields = true;
      } else {
        const input = document.getElementsByName(key)[0];
        input.classList.remove("empty-field");
      }
    }
    if (hasEmptyFields) {
      alert("fill the email address and password");
      return;
    }
    try {
      const response = await Senddetailsandretrivecustomer(logindata);
      if (
        response.data.customerId !== "" ||
        response.data.customerId !== null
      ) {
        navigate("/dashboard", { state: response.data });
        console.log(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Enter the Valid login details");
      } else {
        alert("Enter the valid login details");
      }
    }
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
        <form onSubmit={handleSubmit}>
          <br />
          <h4>Customer Sign In</h4>
          <br />
          <label>
            Email:
            <br />
            <input
              type="text"
              name="emailId"
              value={emailId}
              onChange={changeHandler}
              placeholder="enter the emailId"
              required
            />
            <br />
          </label>
          <br />
          <br />
          <label>
            Password:
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              placeholder="enter the password"
              required
            />
          </label>
          <br />
          <br />
          <button type="submit" class="btn btn-light">
            Submit
          </button>
          <br />
          <br />
          <Link to="/">
            <button class="btn btn-light">Go Back</button>
            <br />
            <br />
          </Link>
        </form>
      </center>
    </>
  );
};

export default LoginForm;
