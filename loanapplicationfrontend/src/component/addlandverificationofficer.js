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
        let hasEmptyFields = false;
    for (const key in data) {
      if (!data[key]) {
        const input = document.getElementsByName(key)[0];
        input.classList.add("empty-field");
        hasEmptyFields = true;
      } else {
       
        const input = document.getElementsByName(key)[0];
        input.classList.remove("empty-field");
      }
    }
    if (hasEmptyFields) {
      alert("Please fill all the fields.");
      return;
    }
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
           <h4>Add Land Verification Officer</h4>
           <br/>
            <form onSubmit={submitHandler}>
                <label>EmailId</label><br />
                <input type="text" name="emailId" value={emailId} onChange={changeHandler} placeholder="enter the email"/> <br />
                <label>Password</label><br />
                <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Example:Sasikarthi15$"/> <br />
                <label>Role</label><br />
                <input type="text" name="role" value={role} onChange={changeHandler} placeholder="enter the role"/> <br />
               
                <label>Land Verification Officer Name</label><br />
                <input type="text" name="officerName" value={officerName} onChange={changeHandler} placeholder="enter the name"/> <br />
                <label>Land Verification Officer MobileNumber</label><br />
                <input type="text" name="officerContact" value={officerContact} onChange={changeHandler} placeholder="enter the contact details"/> <br />
                <br/>
                <input class="btn btn-outline-success"  type="submit" name="submit"/><br/><br/>
                <Link  to="/admindashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default Addlandverificationofficer;
