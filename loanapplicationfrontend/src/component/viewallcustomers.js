import axios from 'axios';
import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";
import Table from '../services/customerstable';
const ViewAllCustomer = () => {
  const [customers, setCustomers] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/customer/viewAllcustomers")
      .then(response => setCustomers(response.data))
      .catch(error => console.log(error));
  }, []);
  return (<center>
    <div>
      <h1>All Customers</h1>
      <Table customers={customers} />
      <Link  to="/managerdashboard">
            <button class="btn btn-outline-danger">Go Back</button><br/><br/>
            </Link>
    </div></center>
  );
};
export default ViewAllCustomer;