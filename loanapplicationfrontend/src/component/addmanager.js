import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import SendManagerdetails from '../services/sendmanagerdetails';


function AddManager() {
              
    const [data,setData] = useState({
        emailId:"",
        password:"",
        role:"",
        managerName:"",
        managerContact:"",
    });
 
    const navigate = useNavigate();
    const {emailId,password,role,managerName,managerContact}=data;//destructuring
   
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
          const response = await SendManagerdetails(data);
          console.log("response---", response);
          if (response.data.managerId !== "" || response.data.managerId !== null) {
            navigate("/managersuccessfullyadded");
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
               
                <label>Manager Name</label><br />
                <input type="text" name="managerName" value={managerName} onChange={changeHandler}/> <br />
                <label>Manager MobileNumber</label><br />
                <input type="text" name="managerContact" value={managerContact} onChange={changeHandler}/> <br />
                
                <input type="submit" name="submit"/><br/><br/>
                <Link  to="/admindashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default AddManager;
