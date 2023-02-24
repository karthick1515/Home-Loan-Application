import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Getloan=(props)=>{
    const location= useLocation();
    let customerid=location.data.customerId.toString(); 
   
    console.log(location.state);
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/viewbycustomerid',customerid,customConfig));
    
}

export default Getloan;