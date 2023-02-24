
import axios from 'axios';

const SendLandverificationsigndetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
       }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    return (axios.post('http://localhost:8080/landverify/login',payload,customConfig));
}


export default SendLandverificationsigndetails;

