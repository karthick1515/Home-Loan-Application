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

import com.homeloanapp.entities.FinanceVerificationOfficer;
import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Login;
import com.homeloanapp.exceptions.FinanceVerificationOfficerException;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.service.IFinanceVerificationService;

import jakarta.validation.Valid;

@Validated
@RestController
@RequestMapping("/financeverify")
@CrossOrigin
public class FinanceVerificationController {
	
	Logger logger = Logger.getLogger(FinanceVerificationController.class.getName());
	@Autowired
	private IFinanceVerificationService service;

	public FinanceVerificationController() {
		logger.log(Level.INFO,"-----> Finance Rest Controller Working!");
		
	}

	
	@PutMapping("/financestatus")

	public LoanApplication updateStatus(@RequestBody @Valid LoanApplication loanapplication) throws InvalidLoanApplicationException {
		
		return this.service.updateStatus(loanapplication);  //returns the updated loan application
	}
	
	@PostMapping("/add") 
	public FinanceVerificationOfficer addfinanceverification(@RequestBody @Valid FinanceVerificationOfficer financeVerificationOfficer) throws FinanceVerificationOfficerException {
		return	this.service.addFinanceVerificationOfficer(financeVerificationOfficer);
		
	}
	 
	
	@PostMapping("/login")
	public FinanceVerificationOfficer exampleMethod(@RequestBody Login login) throws FinanceVerificationOfficerException {
		 return service.login(login.getEmailId(), login.getPassword());
	   
	}
	
}
