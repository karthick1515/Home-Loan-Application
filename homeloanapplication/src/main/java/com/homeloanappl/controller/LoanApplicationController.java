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

import com.homeloanapplication.entities.LoanApplication;
import com.homeloanapplication.exception.InvalidLoanApplicationException;
import com.homeloanapplication.service.ILoanApplicationService;

@RestController
@RequestMapping("/loanapplication")
public class LoanApplicationController {

	Logger logger = Logger.getLogger(LoanApplicationController.class.getName());

	public LoanApplicationController() {
		logger.log(Level.INFO, "----->Inside Loan Application Controller Working!");

	}

	@Autowired
	ILoanApplicationService loanApplicationService;

	@GetMapping("/home")
	public String homeRequest() {
		return "Welcome : Home Loan Application";
	}

	@PostMapping("/add")
	public LoanApplication addLoanApplication(@RequestBody LoanApplication loanApplication) {
		this.loanApplicationService.addLoanApplication(loanApplication);
		return loanApplication;
	}

	@PutMapping("/update")
	public LoanApplication updateLoanApplication(@RequestBody LoanApplication loanApplication)
			throws InvalidLoanApplicationException {
		this.loanApplicationService.updateLoanApplication(loanApplication);
		return loanApplication;
	}

	@DeleteMapping("/delete/{applicationid}")
	public LoanApplication deleteLoanApplication(@PathVariable("applicationid") long loanApplicationId)
			throws InvalidLoanApplicationException {
		return this.loanApplicationService.deleteLoanApplication(loanApplicationId);

	}

	@GetMapping("/viewallloan")
	public List<LoanApplication> retrieveAllLoanApplication() {
		return this.loanApplicationService.retrieveAllLoanApplication();

	}

	@GetMapping("/viewbyid/{loanid}")
	public LoanApplication retrieveLoanApplicationById(@PathVariable("loanid") long loanApplicationId)
			throws InvalidLoanApplicationException {
		return this.loanApplicationService.retrieveLoanApplicationById(loanApplicationId);

	}

}
