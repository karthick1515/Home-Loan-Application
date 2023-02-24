
import { Link } from "react-router-dom";
function Home(){
    return (
        <> <center>
             <Link to="/about">
            <button class="btn btn-outline-danger">about</button><br/><br/>
            </Link>
            <br/>
            <Link to="/process">
            <button class="btn btn-outline-danger">Process And Guidance</button><br/><br/>
            </Link>
            <p>Customer login</p>
            <Link to="/customer/signup">
            <button class="btn btn-outline-danger">Sign Up</button><br/><br/>
            </Link>

            <Link to="/customer/signin">
            <button class="btn btn-outline-danger">Sign In</button>
            </Link>

            <p>Land Verification login</p>
            <Link to="/landofficerlogin">
            <button class="btn btn-outline-danger">Sign In</button>
            </Link>

            <p>Finance Verification login</p>
            <Link to="/financeofficerlogin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>
            
            <p>Manager login</p>
            <Link to="/managerlogin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>
            
            <p>Admin login</p>
            <Link to="/adminsignin">
            <button class="btn btn-outline-danger">Sign In</button><br/><br/>
            </Link>

            </center>

        </>
    );
}
export default Home;