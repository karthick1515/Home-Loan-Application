import { Link } from "react-router-dom";
function SuccessMessage(){
    return (
        <><center>
            <p>Customer registered successfully</p>
            <p>Click <Link  to="/">
                here </Link>SignIn......</p>
                </center>   </>
    );
}
export default SuccessMessage;