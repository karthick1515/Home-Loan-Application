import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const  DashBoard = (props) => {
    const location= useLocation();
    const loancustomerId = location.state.customerId;

    console.log(loancustomerId);
    const navigate = useNavigate();
    const handleLoanApplySubmit = e=> {
        e.preventDefault();
     const value=props;
       console.log(value.data);   
             navigate("/applyloan",{state:location.state});
      };
      const handleViewLoanSubmit = async (e) => {
        e.preventDefault();
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        }
        try {
          const value=await(axios.post('http://localhost:8080/loanapplication/viewbycustomerid',loancustomerId,customConfig));
          console.log("response---", value);
          if (value.data.customerId !== "" || value.data.customerId !== null) {
            navigate("/viewloandetails",{state:value.data});
            console.log(value.data);
          }
        } catch (error) {
          if (error.value && error.value.status === 404) {
            alert("Your not applied for the loan yet");
          } else {
            alert("Your not applied for the loan yet");
          }
        }
      };
   
    const handleProfileSubmit = event=> {
        event.preventDefault();
      const value=props;
       console.log(value.data);     
             navigate("/customerdetails",{state:location.state});
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
            <h4>Welcome To Our Home loan Application....{location.state.customerName}</h4><br/>
            <Link onClick={handleProfileSubmit} to="/customerdetails">
            <button class="btn btn-outline-danger">Profile</button><br/><br/>
            </Link>
            <Link onClick={handleLoanApplySubmit} to="/applyloan">
            <button class="btn btn-outline-danger">Apply Loan</button><br/><br/>
            </Link>
            <Link onClick={handleViewLoanSubmit} to="/viewloandetails">
            <button class="btn btn-outline-danger">View Loan</button><br/><br/>
            </Link>
            <Link  to="/">
            <button class="btn btn-outline-danger">Sign Out</button><br/><br/>
            </Link>
            </center>
        </>
    );
}

export default DashBoard;
