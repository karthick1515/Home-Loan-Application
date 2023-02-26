import { Link } from "react-router-dom";
function  Process(){
    return (<div className="bg">
        <center>
           <h1> <p>Process</p></h1>
<p>1.We will share the planes to you ones you registered to our application .</p>
<p> 2.If that Planes are satisfy for you,you can apply for the loan Using the loan application.</p>
<p> 3.we will verify by our team and after every approvals we will contact you to discuss about the loan 
amount EMI and intrest.</p>
<p>4.The intrest amount will vary accoding to the loan amount.</p>
<p>Any Queries Contact Us:</p>
<p>004-63737-3637</p>
<p>servicehomeloan@gmail.com</p>
          
        <Link  to="/">
        <button class="btn btn-outline-danger">Go Back</button><br/><br/>
        </Link> </center></div>
    );
}
export default Process;