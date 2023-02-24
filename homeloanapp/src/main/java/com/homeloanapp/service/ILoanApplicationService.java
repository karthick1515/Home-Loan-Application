package com.homeloanapp.service;

import java.util.List;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;


public interface ILoanApplicationService  {
	
	public LoanApplication addLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException;
	public LoanApplication updateLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException;
	public LoanApplication deleteLoanApplication(int loanApplicationId) throws InvalidLoanApplicationException;
	public List<LoanApplication> retrieveAllLoanApplication();
	public LoanApplication retrieveLoanApplicationById(int loanApplicationId) throws InvalidLoanApplicationException;
    public LoanApplication getapplicationbycustomerId(int customerId)throws InvalidLoanApplicationException;
}
