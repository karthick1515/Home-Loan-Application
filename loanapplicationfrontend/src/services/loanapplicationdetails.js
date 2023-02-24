import axios from 'axios';

const SendLoanApplicationDetails=(props)=>{
      
    let payload= {
        "applicationId":props.applicationId.toString(),
        "applicationDate":props.applicationDate.toString(),
        "customerId":props.customerId.toString(),
         "loanAppliedAmount":props.loanAppliedAmount.toString(),
         "loanApprovedAmount":props.loanApprovedAmount.toString(),
         "landVerificationApproval":props.landVerificationApproval.toString(),
         "financeVerificationApproval":props.financeVerificationApproval.toString(),
         "adminApproval":props.adminApproval.toString(),
         "status":props.status.toString(),
         "customerAddress": props.customerAddress.toString(),
        "occupation": props.occupation.toString(),
        "annualSalary": props.annualSalary.toString(),
        "companyAddress": props.companyAddress.toString(),
        "neededtimetoreturn": props.neededtimetoreturn.toString()
        }

    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    return (axios.post('http://localhost:8080/loanapplication/add',payload,customConfig));
    
}

export default SendLoanApplicationDetails;