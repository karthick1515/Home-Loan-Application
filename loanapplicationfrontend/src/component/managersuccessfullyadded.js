import { Link } from "react-router-dom";
function Managersuccessfullyadded(){
    return (
        <>
            <p>Manager Added successfully</p>
            <p>Click <Link  to="/admindashboard">
                here </Link>to go back....</p>
        </>
    );
}

export default Managersuccessfullyadded;