import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const  LoanAppliedMessage= (props) => {
    const location= useLocation();
    const navigate = useNavigate();
    const handleClick = event=> {
        event.preventDefault();
      const value=props;
       console.log(value.data);
             navigate("/dashboard",{state:location.state});
      };
    return (
        <center>
           <p>Loan Applied successfully</p>
            <p>Click <Link onClick={handleClick}  to="/dashboard">
                here</Link>to go back to the Home Page......</p>
        </center>
    );
}
export default LoanAppliedMessage;