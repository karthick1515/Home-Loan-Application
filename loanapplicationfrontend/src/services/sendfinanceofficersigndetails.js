import axios from 'axios';

const SendFinanceverificationsigndetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
       }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    return (axios.post('http://localhost:8080/financeverify/login',payload,customConfig));
}

export default SendFinanceverificationsigndetails;