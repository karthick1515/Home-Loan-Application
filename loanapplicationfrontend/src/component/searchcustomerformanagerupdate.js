import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
const SearchCustomerForManagerUpdate = (props) => {
    const [customerId,setCustomerId] = useState("");

const navigate = useNavigate();
    const changeHandler = event=>{
        setCustomerId(event.target.value );
    }

  const handleSubmit = async(event)=> {

    event.preventDefault();
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        }
        try {
          const value=await(axios.post('http://localhost:8080/customer/viewbycustomerid',customerId,customConfig));
          console.log("response---", value);
          if (value.data.customerId !== "" || value.data.customerId !== null) {
            navigate("/viewcustomerdetailsformanagerupdate",{state:value.data});
            console.log(value.data);
          }
        } catch (error) {
                      alert("Check whether your entered the valid customer Id");
          }
        
  };

  return (<center>
    <form onSubmit={handleSubmit}>
      <label>
        Enter the CustomerId:
        <input type="text" name="customerId" value={customerId} onChange={changeHandler} />
      </label><br/><br/>
            <button type="submit">Submit</button><br/><br/>
            
      <Link  to="/managerdashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </form></center>
  );
};

export default SearchCustomerForManagerUpdate;