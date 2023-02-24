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
            alert("Check whether your applied for the loan");
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
           <center>
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
