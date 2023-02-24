package com.homeloanapplication.service;

import java.util.List;

import com.homeloanapplication.entities.LoanApplication;
import com.homeloanapplication.exception.InvalidLoanApplicationException;

public interface ILoanApplicationService  {
	
	public LoanApplication addLoanApplication(LoanApplication loanApplication);
	public LoanApplication updateLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException;
	public LoanApplication deleteLoanApplication(long loanApplicationId) throws InvalidLoanApplicationException;
	public List<LoanApplication> retrieveAllLoanApplication();
	public LoanApplication retrieveLoanApplicationById(long loanApplicationId) throws InvalidLoanApplicationException;
	
	

}