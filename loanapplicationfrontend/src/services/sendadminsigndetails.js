import axios from 'axios';

const Sendadminsigndetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
       }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    return (axios.post('http://localhost:8080/admin/login',payload,customConfig));
}

export default Sendadminsigndetails;