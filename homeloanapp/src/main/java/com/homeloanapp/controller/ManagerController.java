package com.homeloanapp.controller;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Manager;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.exceptions.ManagerException;
import com.homeloanapp.service.IManagerService;

import jakarta.validation.Valid;

@Validated
@RestController
@RequestMapping("/managerverify")
@CrossOrigin
public class ManagerController {

	@Autowired
	private IManagerService managerservice;
	
	Logger logger = Logger.getLogger(ManagerController.class.getName());
	
	public ManagerController() {
		logger.log(Level.INFO,"-----> Land Rest Controller Working!");
	}
	

	@PutMapping("/loanstetus")

	public LoanApplication updateStatus(@RequestBody @Valid LoanApplication loanapplication) throws InvalidLoanApplicationException {
		
		return this.managerservice.updateStatus(loanapplication);			//returns the update loan application
	}
	
	@PostMapping("/add") 
	public Manager addCustomer(@RequestBody @Valid Manager customer) throws ManagerException {
	   return this.managerservice.addManager(customer);
		
	}
	
	@PostMapping("/login")
	public Manager addmanager(@RequestBody Manager login) throws ManagerException  {
		 return managerservice.login(login.getEmailId(), login.getPassword());
	   
	}
}

