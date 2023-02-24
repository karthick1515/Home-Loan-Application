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

import com.homeloanapp.entities.LandVerificationOfficer;
import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Login;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.exceptions.LandVerificationOfficerException;
import com.homeloanapp.service.ILandVerificationService;

import jakarta.validation.Valid;

@Validated
@RestController
@RequestMapping("/landverify")
@CrossOrigin
public class LandVerificationController {
	
	@Autowired
	private ILandVerificationService lservice;
	Logger logger = Logger.getLogger(LandVerificationController.class.getName());
	
	public LandVerificationController() {
		logger.log(Level.INFO,"-----> Land Rest Controller Working!");
		
	}
	
	
	@PutMapping("/landstatus")

	public LoanApplication updateStatus(@RequestBody @Valid LoanApplication loanapplication) throws InvalidLoanApplicationException {
		
		return this.lservice.updateStatus(loanapplication);			//returns the update loan application
	}
	@PostMapping("/add") 
	public LandVerificationOfficer addlandverification(@RequestBody @Valid LandVerificationOfficer landVerificationOfficer) throws LandVerificationOfficerException {
		return	lservice.addLandVerificationOfficer(landVerificationOfficer);
		
	}
	 
	@PostMapping("/login")
	public LandVerificationOfficer login(@RequestBody Login login) throws LandVerificationOfficerException {
		 return lservice.login(login.getEmailId(), login.getPassword());
	   
	}
		
}
