import { Link } from "react-router-dom";
function SuccessMessage(){
    return (
        <>
            <p>Customer registered successfully</p>
            <p>Click <Link  to="/">
                here </Link>SignIn......</p>
        </>
    );
}
export default SuccessMessage;