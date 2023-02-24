package com.homeloanappl.controller;
import java.util.logging.Level; 
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapplication.entities.LoanApplication;
import com.homeloanapplication.exception.InvalidLoanApplicationException;
import com.homeloanapplication.service.IFinanceVerificationService;


@RestController
@RequestMapping("/financeverify")
public class FinanceVerificationController {
	Logger logger = Logger.getLogger(FinanceVerificationController.class.getName());
	@Autowired
	IFinanceVerificationService service;
	
	//Method to check the working of rest controller in the console
	public FinanceVerificationController() {
		logger.log(Level.INFO,"-----> Finance Rest Controller Working!");
		
	}
	
	//Method to check the connection with the webservice
	@GetMapping("/home")
	public String homeRequest() {
		return "Welcome : Home Loan Application (Version 1.0)"; //returns String value
	}

	
	@PutMapping("/financestatus")
	//Method to update the status of application and loan amount if approved, passes the parameters of application class
	public LoanApplication updateStatus(@RequestBody LoanApplication loanapplication) throws InvalidLoanApplicationException {
		
		return this.service.updateStatus(loanapplication);  //returns the updated loan application
	}

}
