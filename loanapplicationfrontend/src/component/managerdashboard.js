import { Link } from "react-router-dom";

const  ManagerDashBoard = (props) => {

    return (
        <>
           <center>
            <h4>Manager Profile</h4><br/>
            <Link to="/searchloanforupdatethemanagerverification">
            <button class="btn btn-outline-danger">View Loan Details To Update The Manager Verification</button><br/><br/>
            </Link>
            <Link  to="/searchcustomerforupdatemanagerverification">
            <button class="btn btn-outline-danger">View Customer Details</button><br/><br/>
            </Link>
            
            <Link  to="/viewallcustomers">
            <button class="btn btn-outline-danger">View All Customer Details</button><br/><br/>
            </Link>

            <Link  to="/viewallapplications">
            <button class="btn btn-outline-danger">View All LoanApplication Details</button><br/><br/>
            </Link>
            
            <Link  to="/">
            <button class="btn btn-outline-danger">Sign Out</button><br/><br/>
            </Link>

            </center>
        </>
    );
}

export default ManagerDashBoard;