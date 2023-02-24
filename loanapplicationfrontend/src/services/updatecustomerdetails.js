import axios from 'axios';

const UpdateDetails=(props)=>{
      
    let payload= {
        "customerId":props.customerId.toString(),
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
    
    return (axios.put('http://localhost:8080/customer/update',payload,customConfig));
    
}

export default UpdateDetails;
