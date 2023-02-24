import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import SendDetailsToServer from '../services/singupdetails';

function SignUp() {
              
    const [data,setData] = useState({
        emailId:"",
        password:"",
        customerName: "",
        mobileNumber: "",
        dateOfBirth:"",
        gender: "",
        nationality: "",
        aadharNumber: "",
        panNumber: ""
    });
 
    const navigate = useNavigate();
    const {emailId,password,customerName,mobileNumber,dateOfBirth,gender,nationality,aadharNumber,panNumber}=data;//destructuring
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
          const response = await SendDetailsToServer(data);
          console.log("response---", response);
          if (response.data.customerId !== "" || response.data.customerId !== null) {
            navigate("/customeregisterd");
            console.log(response.data);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert("You already have account with this email try with another email");
          } else {
            alert("Enter the valid details as per the given instruction");
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
                <label>Name</label><br />
                <input type="text" name="customerName" value={customerName} onChange={changeHandler}/> <br />
                <label>MobileNumber</label><br />
                <input type="number" name="mobileNumber" value={mobileNumber} onChange={changeHandler}/> <br />
                <label>Date Of Birth</label><br />
                <input type="text" name="dateOfBirth" value={dateOfBirth} onChange={changeHandler}/> <br />
                <label>Gender</label><br />
                <input type="text" name="gender" value={gender} onChange={changeHandler}/> <br />
                <label>Nationality</label><br />
                <input type="text" name="nationality" value={nationality} onChange={changeHandler}/> <br />
                <label>AadharNumber</label><br />
                <input type="number" name="aadharNumber" value={aadharNumber} onChange={changeHandler}/> <br />
                <label>panNumber</label><br />
                <input type="text" name="panNumber" value={panNumber} onChange={changeHandler}/> <br />
                
                <input type="submit" name="submit"/><br/><br/>
                <Link  to="/">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default SignUp;
