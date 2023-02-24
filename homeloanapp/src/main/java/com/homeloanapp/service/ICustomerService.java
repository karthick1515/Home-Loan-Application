package com.homeloanapp.service;

import java.util.List;

import com.homeloanapp.entities.Customer;
import com.homeloanapp.exceptions.CustomerNotFoundException;

public interface ICustomerService  {
	
	public Customer addCustomer(Customer customer) throws CustomerNotFoundException ;
	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;
	public Customer deleteCustomer(int custid) throws CustomerNotFoundException;
	public Customer viewCustomer(int custid) throws CustomerNotFoundException;
	public List<Customer> viewAllCustomers();
    public Customer login(String email,String password) throws CustomerNotFoundException;
}



