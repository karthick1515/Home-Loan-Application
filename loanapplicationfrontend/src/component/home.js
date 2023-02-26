
import { Link } from "react-router-dom";
function Home(){
    return (
        <>
            <center><h1>Welcome To Our Home Loan Application</h1>
            <Link to="/about"><br/>
        <button class="btn btn-outline-danger">About Us</button>
        </Link><br/>
        <br/>
        <Link to="/process">
            <button class="btn btn-outline-danger">Loan Process Details</button>
        </Link></center>
        <center><table ><tr>
            <td>
            <p>Customer Login</p>
            <p>Register here:</p>
            <Link to="/customer/signup">
            <button class="btn btn-outline-success">Register</button><br/>
            </Link>
              <p>Sign in if you already registered:</p>
            <Link to="/customer/signin">
            <button class="btn btn-outline-danger">Sign In</button>
            </Link>
            </td><td>
            <p>Land Verification Login</p>
            <Link to="/landofficerlogin">
            <button class="btn btn-outline-danger">Sign In</button>
            </Link>
            </td>
            <td>
            <p>Finance Verification Login</p>
            <Link to="/financeofficerlogin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>
            </td><td>
            <p>Manager Login</p>
            <Link to="/managerlogin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>
            </td>
            <td>
            <p>Admin Login</p>
            <Link to="/adminsignin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>
            </td>
            </tr>
            </table>
            </center>      
            
        </>
    );
}
export default Home;