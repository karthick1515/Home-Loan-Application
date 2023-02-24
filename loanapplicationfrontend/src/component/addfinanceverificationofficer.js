import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import Sendfinanceverificationdetails from '../services/sendfinanceverificationdetails';


function Addfinanceverificationofficer() {
              
    const [data,setData] = useState({
        emailId:"",
        password:"",
        role: "",
        finOfficerName: "",
        finOfficerContact:"",
    });
 
    const navigate = useNavigate();
    const {emailId,password,role,finOfficerName,finOfficerContact}=data;//destructuring
   
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
          const response = await Sendfinanceverificationdetails(data);
          console.log("response---", response);
          if (response.data.financeverificationId !== "" || response.data.financeverificationId !== null) {
            navigate("/verificationofficersuccessfullyadded");
            console.log(response.data);
          }

        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert("The officer is already there with this email try with another email");
          } else {
            alert("An error occurred while submitting the form check whether your entered the valid details according to the instruction.");
          }
        }
      }
    
    return(
        <div><center>
            <form onSubmit={submitHandler}>
                <label>EmailId</label><br />
                <input type="text" name="emailId" value={emailId} onChange={changeHandler}/> <br />
                <label>Password</label><br />
                <input type="password" name="password" value={password} onChange={changeHandler}/> <br />
                <label>Role</label><br />
                <input type="text" name="role" value={role} onChange={changeHandler}/> <br />
                <label>Finanance Verification Officer Name</label><br />
               <input type="text" name="finOfficerName" value={finOfficerName} onChange={changeHandler}/> <br />
                <label>Finanance Verification Officer MobileNumber</label><br />
                <input type="text" name="finOfficerContact" value={finOfficerContact} onChange={changeHandler}/> <br />
                  <input type="submit" name="submit"/><br/><br/>
                <Link  to="/admindashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default Addfinanceverificationofficer;
