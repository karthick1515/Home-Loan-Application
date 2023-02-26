import React from 'react';


const Table = ({ customers }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
        <th>Customer Id</th>
          <th>Name</th>
          <th>EmailId</th>
          <th>Phone Number</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Nationality</th>
          <th>Aadhar Number</th>
          <th>PanNumber</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td>{customer.customerId}</td>
            <td>{customer.customerName}</td>
            <td>{customer.emailId}</td>
            <td>{customer.mobileNumber}</td>
            <td>{customer.dateOfBirth}</td>
            <td>{customer.gender}</td>
            <td>{customer.nationality}</td>
            <td>{customer.aadharNumber}</td>
            <td>{customer.panNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
