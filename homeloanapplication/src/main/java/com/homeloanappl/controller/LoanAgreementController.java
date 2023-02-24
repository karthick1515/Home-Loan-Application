package com.homeloanappl.controller;

import java.util.List; 
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapplication.entities.LoanAgreement;
import com.homeloanapplication.exception.InvalidLoanAgreementException;
import com.homeloanapplication.service.ILoanAgreementService;

@RestController
@RequestMapping("/loanagreement")
public class LoanAgreementController {
	
Logger logger = Logger.getLogger(LoanAgreementController.class.getName());
public LoanAgreementController() {
	logger.log(Level.INFO,"----->Inside Loan Agreement Controller Working!");
}

@Autowired
ILoanAgreementService loanAgreementService;


@GetMapping("/home")
public String homeRequest() {
	return "Welcome : Home Loan Application ";
}

@PostMapping("/add")
public LoanAgreement addLoanAgreement(@RequestBody LoanAgreement loanAgreement) {
	this.loanAgreementService.addLoanAgreement(loanAgreement);
	return loanAgreement;
}

@PutMapping("/update")
public LoanAgreement updateLoanAgreement(@RequestBody LoanAgreement loanAgreement) throws InvalidLoanAgreementException {
	this.loanAgreementService.updateLoanAgreement(loanAgreement);
	return loanAgreement;
}

@DeleteMapping("/delete/{loanid}")
public LoanAgreement deleteLoanAgreement(@PathVariable("loanid") long loanAgreementId) throws InvalidLoanAgreementException {
	return this.loanAgreementService.deleteLoanAgreement(loanAgreementId);
		
}

@GetMapping("/viewallloan")
public List<LoanAgreement> retrieveAllLoanAgreement(){
	return this.loanAgreementService.retrieveAllLoanAgreement();
	
}

@GetMapping("/viewbyid/{loanid}")
public LoanAgreement retrieveLoanAgreementById(@PathVariable("loanid") long loanAgreementId) throws InvalidLoanAgreementException{
	return this.loanAgreementService.retrieveLoanAgreementById(loanAgreementId);
	
}

}