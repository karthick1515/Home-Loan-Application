import axios from 'axios';

const SendManagerdetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
         "role":props.role.toString(),
         "managerName":props.managerName.toString(),
         "managerContact":props.managerContact.toString()
    }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/managerverify/add',payload,customConfig));
    
}

export default SendManagerdetails;

