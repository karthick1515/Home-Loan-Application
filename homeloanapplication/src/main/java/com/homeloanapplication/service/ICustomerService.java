package com.homeloanapplication.service;

import java.time.LocalDate;
import java.util.List;

import com.homeloanapplication.entities.Customer;
import com.homeloanapplication.exception.CustomerNotFoundException;

public interface ICustomerService {
	public Customer addCustomer(Customer customer) ;
	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;
	public Customer deleteCustomer(int custid) throws CustomerNotFoundException;
	
	public Customer viewCustomer(int custid) throws CustomerNotFoundException;
	public List<Customer> viewAllCustomers();

}
