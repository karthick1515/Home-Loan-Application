package com.homeloanapp.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeloanapp.entities.Customer;
import com.homeloanapp.exceptions.CustomerNotFoundException;
import com.homeloanapp.repository.ICustomerRepository;
import com.homeloanapp.repository.ILoanApplicationRepository;




@Service
public class ICustomerServiceImpl implements ICustomerService {
	Logger logger = Logger.getLogger(ICustomerServiceImpl.class.getName());

	@Autowired
	ICustomerRepository repository;
	
	@Autowired
	ILoanApplicationRepository applicationRepository;

	
	public ICustomerServiceImpl(ICustomerRepository repository) {
		super();
		this.repository = repository;
	}

	@Transactional
	@Override
	public Customer addCustomer(Customer customer) throws CustomerNotFoundException{

		Optional<Customer> optional = repository.findByEmailId(customer.getEmailId());
		if (!optional.isPresent()) {
			repository.save(customer);
			return customer;
			}
		else {
			throw new CustomerNotFoundException("You already have account with this Email id....");
		}
		
	}

	@Transactional
	@Override
	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException {

		Optional<Customer> optional = repository.findById(customer.getCustomerId());
		if (optional.isPresent()) {
			repository.save(customer);
			return optional.get();
		} else {
			throw new CustomerNotFoundException("Customer couldn't be Updated! ");
		}

	}

	@Transactional
	@Override
	public Customer deleteCustomer(int custid) throws CustomerNotFoundException {

		Optional<Customer> optional = repository.findById(custid);
		if (optional.isPresent()) {
			repository.deleteById(custid);
			return optional.get();
		} else {
			throw new CustomerNotFoundException("Customer not found for delete operation!");
		}

	}

	@Override
	public Customer viewCustomer(int custid) throws CustomerNotFoundException {

		Optional<Customer> optional = repository.findById(custid);
		try {

			if (optional.isPresent()) {
				repository.findById(custid);
			} else {
				throw new CustomerNotFoundException("Customer not found with the matching ID!");
			}

		}catch (Exception e) {
			logger.info(e.getMessage());
			throw new CustomerNotFoundException("Customer not found with the matching ID!");
		}
		return optional.get();
	}

	@Override
	public List<Customer> viewAllCustomers() {
		List<Customer> customerList = null;
		try {
			customerList = repository.findAll();
		} catch (Exception e) {
			logger.info(e.getMessage());

		}

		return customerList;
	}

	@Override
	public Customer login(String email, String password) throws CustomerNotFoundException{
		
		Optional<Customer> optional = repository.findByEmailId(email);

		Customer customer=optional.get();
		
		if(customer.getPassword().equals(password))
		{
				return customer;
		}else {
			throw new CustomerNotFoundException("Customer not found for the given!");
		}
	}
	
}

	
