import axios from 'axios';

const SendLandverificationdetails=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
         "role":props.role.toString(),
         "officerName":props.officerName.toString(),
         "officerContact":props.officerContact.toString()
    }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/landverify/add',payload,customConfig));
    
}

export default SendLandverificationdetails;

