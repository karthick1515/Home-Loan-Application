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
  setData({
    ...data,
    [e.target.name]: e.target.value,
    [e.target.name]: e.target.value ? e.target.value : "" // Clear placeholder when user types in the field
  });
};

    const submitHandler = async (e) => {
      e.preventDefault();
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
          alert("You already have account with this email, you can login or try with another email");
        } else {
          alert("Enter the valid details as per the given instructions");
        }
      }
    };

    return(
        <div><center>
            <form onSubmit={submitHandler}>
            <h4>Register</h4>
                <label>EmailId</label><br />
                <input type="text" name="emailId" value={emailId} onChange={changeHandler} placeholder="enter the emailId"/> <br />
                <label>Password</label><br />
                <input type="password" name="password" value={password} onChange={changeHandler}placeholder="Example:Sasikarthi15$"/> <br />
                <label>Name</label><br />
                <input type="text" name="customerName" value={customerName} onChange={changeHandler} placeholder="enter the name"/> <br />
                <label>MobileNumber</label><br />
                <input type="number" name="mobileNumber" value={mobileNumber} onChange={changeHandler} placeholder="enter the Mobile no."/> <br />
                <label>Date Of Birth</label><br />
                <input type="text" name="dateOfBirth" value={dateOfBirth} onChange={changeHandler} placeholder="Format:yyyy-MM-dd"/> <br />
                <label>Gender</label><br />
                <input type="text" name="gender" value={gender} onChange={changeHandler} placeholder="enter the gender"/> <br />
                <label>Nationality</label><br />
                <input type="text" name="nationality" value={nationality} onChange={changeHandler} placeholder="enter the nationality"/> <br />
                <label>AadharNumber</label><br />
                <input type="number" name="aadharNumber" value={aadharNumber} onChange={changeHandler} placeholder="enter the aadharNumber"/> <br />
                <label>PanNumber</label><br />
                <input type="text" name="panNumber" value={panNumber} onChange={changeHandler} placeholder="enter the panNumber" /> <br />
                <br/>
                <input class="btn btn-outline-success" type="submit" name="submit"/><br/><br/>
                <Link  to="/">
            <button class="btn btn-outline-danger">Go Back</button><br/>
            </Link>
            </form></center>
        </div>
    );
}

export default SignUp;
