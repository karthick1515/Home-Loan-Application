package com.homeloanapp.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapp.entities.Customer;
import com.homeloanapp.entities.Login;
import com.homeloanapp.exceptions.CustomerNotFoundException;
import com.homeloanapp.service.ICustomerService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerServiceController {
	
	Logger logger = Logger.getLogger(CustomerServiceController.class.getName());
	
	public CustomerServiceController() {
		logger.log(Level.INFO,"-----> Customer Rest Controller Working!");
		
	}
	
	@Autowired
	private ICustomerService customerService;
	
	

	@PostMapping("/add") 
	public Customer addCustomer(@RequestBody @Valid Customer customer) throws CustomerNotFoundException {
		this.customerService.addCustomer(customer);
		return customer;
	}
			
	@PostMapping("/viewbycustomerid")
	public Customer viewCustomer(@RequestBody int custid) throws CustomerNotFoundException {
		return customerService.viewCustomer(custid);
	}
	
	@PutMapping("/update")
	public Customer updateCustomer(@RequestBody @Valid Customer customer) throws CustomerNotFoundException{
		return this.customerService.updateCustomer(customer);
		
	}
	
	@GetMapping("/viewAllcustomers")
	public List<Customer> viewAllCustomer() {
		return customerService.viewAllCustomers();
	}
	
	
	
	@DeleteMapping("/delete/{custid}")
	public String deleteCustomer(@PathVariable("custid") int custid) throws CustomerNotFoundException{
	customerService.deleteCustomer(custid);
	return "Deleted Customer is:"+custid;
	}

	
	@PostMapping("/login")
	public Customer login(@RequestBody Login login) throws CustomerNotFoundException {
		 return customerService.login(login.getEmailId(), login.getPassword());
	   
	}

}	
