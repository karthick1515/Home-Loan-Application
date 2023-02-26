import React from 'react';

const LoanApplicationTable = ({ loanapplications }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
        <th>Application Id</th>
          <th>Application Date</th>
          <th>Customer Id</th>
          <th>Loan Applied Amount</th>
          <th>Customer Address</th>
          <th>Occupation</th>
          <th>Annual Salary</th>
          <th>Company Address</th>
          <th>Needed Time To Return</th>
          <th>Loan Approved Amount</th>
          <th>Land Verification Approval</th>
          <th>Finance Verification Approval</th>
          <th>Manager Approval</th>
          <th>Over All Status</th>
        </tr>
      </thead>
      <tbody>
        {loanapplications.map(loanapplication => (
          <tr key={loanapplication.id}>
             <td>{loanapplication.applicationId}</td>
            <td>{loanapplication.applicationDate}</td>
            <td>{loanapplication.customerId}</td>
            <td>{loanapplication.loanAppliedAmount}</td>
            <td>{loanapplication.customerAddress}</td>
            <td>{loanapplication.occupation}</td>
            <td>{loanapplication.annualSalary}</td>
            <td>{loanapplication.companyAddress}</td>
            <td>{loanapplication.neededtimetoreturn}</td>
            <td>{loanapplication.loanApprovedAmount}</td>
            <td>{loanapplication.landVerificationApproval}</td>
            <td>{loanapplication.financeVerificationApproval}</td>
            <td>{loanapplication.adminApproval}</td>
            <td>{loanapplication.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanApplicationTable;
