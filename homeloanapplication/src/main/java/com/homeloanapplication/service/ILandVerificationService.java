package com.homeloanapplication.service;

import com.homeloanapplication.entities.LoanApplication;
import com.homeloanapplication.exception.InvalidLoanApplicationException;

public interface ILandVerificationService {

	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException;

}