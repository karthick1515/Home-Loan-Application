import axios from 'axios';

const SendDetailsToServer=(props)=>{
      
    let payload= {
        "emailId": props.emailId.toString(),
        "password":props.password.toString(),
         "customerName":props.customerName.toString(),
         "mobileNumber":props.mobileNumber.toString(),
         "dateOfBirth":props.dateOfBirth.toString(),
         "gender":props.gender.toString(),
         "nationality":props.nationality.toString(),
         "aadharNumber":props.aadharNumber.toString(),
         "panNumber":props.panNumber.toString()
    }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/customer/add',payload,customConfig));
    
}

export default SendDetailsToServer;