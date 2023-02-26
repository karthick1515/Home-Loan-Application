import { Link } from "react-router-dom";

const  LandOfficerDashBoard = (props) => {
    
    return (
        <>
           <center>
            <h4>Land Verification Officer Profile</h4><br/>
            <Link to="/searchloanforupdatethelandverification">
            <button class="btn btn-outline-danger">View Loan Details To Update The Land Verification</button><br/><br/>
            </Link>
            <Link  to="/searchcustomerforupdatelandverification">
            <button class="btn btn-outline-danger">View Customer Details</button><br/><br/>
            </Link>
            <Link  to="/">
            <button class="btn btn-outline-danger">Sign Out</button><br/><br/>
            </Link>
            </center>
        </>
    );
}

export default LandOfficerDashBoard;