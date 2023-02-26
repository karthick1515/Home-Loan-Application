
import { Link } from "react-router-dom";

const  AdminDashBoard = (props) => {

    return (
        <>
           <center>
            <h4>Admin Profile</h4><br/>
            <Link to="/addfinanceverificationofficer">
            <button class="btn btn-outline-danger">Add Finance Verification Officer</button><br/><br/>
            </Link>
            <Link  to="/addlandverificationofficer">
            <button class="btn btn-outline-danger">Add Land Verification Officer</button><br/><br/>
            </Link>
            <Link to="/addmanager">
            <button class="btn btn-outline-danger">Add Manager</button><br/><br/>
            </Link>
            <Link  to="/">
            <button class="btn btn-outline-danger">Sign Out</button><br/><br/>
            </Link>
            </center>
        </>
    );
}

export default AdminDashBoard;
