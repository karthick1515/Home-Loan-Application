import axios from 'axios';

const Sendfinanceverificationdetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
         "role":props.role.toString(),
         "finOfficerName":props.OfficerName.toString(),
         "finOfficerContact":props.OfficerContact.toString()
    }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/financeverify/add',payload,customConfig));
    
}

export default Sendfinanceverificationdetails;

