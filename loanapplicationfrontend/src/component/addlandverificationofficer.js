import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import SendLandverificationdetails from '../services/sendlanverificationofficer';


function Addlandverificationofficer() {
              
    const [data,setData] = useState({
        emailId:"",
        password:"",
        role:"",
        officerName:"",
        officerContact:"",
    });
 
    const navigate = useNavigate();
    const {emailId,password,role,officerName,officerContact}=data;//destructuring
   
    const changeHandler = e=>{
        setData(
            {
                ...data,[e.target.name]: [e.target.value]
            }
        );
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
          const response = await SendLandverificationdetails(data);
          console.log("response---", response);
          if (response.data.landverifyId !== "" || response.data.landverifyId !== null) {
            navigate("/landverificationofficersuccessfullyadded");
            console.log(response.data);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert("The officer is already there with this email try with another email");
          } else {
            alert("An error occurred while submitting the form check whether your entered the valid details according to the instruction.");
          }
        }
      };
    
    return(
        <div><center>
            <form onSubmit={submitHandler}>
                <label>EmailId</label><br />
                <input type="text" name="emailId" value={emailId} onChange={changeHandler}/> <br />
                <label>Password</label><br />
                <input type="password" name="password" value={password} onChange={changeHandler}/> <br />
                <label>Role</label><br />
                <input type="text" name="role" value={role} onChange={changeHandler}/> <br />
               
                <label>Land Verification Officer Name</label><br />
                <input type="text" name="officerName" value={officerName} onChange={changeHandler}/> <br />
                <label>Land Verification Officer MobileNumber</label><br />
                <input type="text" name="officerContact" value={officerContact} onChange={changeHandler}/> <br />
                
                <input type="submit" name="submit"/><br/><br/>
                <Link  to="/admindashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default Addlandverificationofficer;
