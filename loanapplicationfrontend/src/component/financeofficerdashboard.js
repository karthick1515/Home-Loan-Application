import { Link } from "react-router-dom";

const  FinanceOfficerDashBoard = (props) => {
    
    return (
        <>
           <center>
            <h4>Finance Officer Profile</h4><br/>
            <Link to="/searchloanforupdatethefinanceverification">
            <button class="btn btn-outline-danger">View Loan Details To Update The FinanceVerification</button><br/><br/>
            </Link>
            <Link  to="/searchcustomerforfinanceupdate">
            <button class="btn btn-outline-danger">View Customer Details</button><br/><br/>
            </Link>
            <Link  to="/">
            <button class="btn btn-outline-danger">Sign Out</button><br/><br/>
            </Link>
            </center>
        </>
    );
}

export default FinanceOfficerDashBoard;