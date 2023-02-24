package com.homeloanapp.service;

import java.util.List;

import com.homeloanapp.entities.FinanceVerificationOfficer;
import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.exceptions.FinanceVerificationOfficerException;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;


public interface IFinanceVerificationService  {
	public FinanceVerificationOfficer addFinanceVerificationOfficer(FinanceVerificationOfficer financeVerification)  throws FinanceVerificationOfficerException  ;
	public FinanceVerificationOfficer updateFinanceVerificationOfficer(FinanceVerificationOfficer financeVerification) throws FinanceVerificationOfficerException;
	public FinanceVerificationOfficer deleteFinanceVerificationOfficer(int id) throws FinanceVerificationOfficerException;
	public FinanceVerificationOfficer viewFinanceVerificationOfficer(int id) throws FinanceVerificationOfficerException;
	public List<FinanceVerificationOfficer> viewAllFinanceVerificationOfficer() throws FinanceVerificationOfficerException;
	
    public FinanceVerificationOfficer login(String email,String password) throws FinanceVerificationOfficerException;
    
public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException ;

	}
