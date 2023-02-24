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
import com.homeloanapplication.service.ILandVerificationService;


@RestController
@RequestMapping("/landverify")
public class LandVerificationController {
	
	@Autowired
	ILandVerificationService lservice;
	Logger logger = Logger.getLogger(LandVerificationController.class.getName());
	//Method to check the working of land rest controller in the console
	public LandVerificationController() {
		logger.log(Level.INFO,"-----> Land Rest Controller Working!");
		
	}
	
	@GetMapping("/home")
	//Method to check the connection with the webservice
	public String homeRequest() {
		return "Welcome : Home Loan Application (Version 1.0)";	//returns the welcome home string value
	}
	@PutMapping("/landstatus")
	//Method to update loan application status, Parameters are the values of loan application class
	public LoanApplication updateStatus(@RequestBody LoanApplication loanapplication) throws InvalidLoanApplicationException {
		
		return this.lservice.updateStatus(loanapplication);			//returns the update loan application
	}
		
}