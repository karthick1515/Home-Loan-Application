package com.homeloanapplication.service;

import java.util.List;

import com.homeloanapplication.entities.LoanAgreement;
import com.homeloanapplication.exception.InvalidLoanAgreementException;

public interface ILoanAgreementService{
	
	public LoanAgreement addLoanAgreement(LoanAgreement loanAgreement);
	public LoanAgreement updateLoanAgreement(LoanAgreement loanAgreement) throws InvalidLoanAgreementException;
	public LoanAgreement deleteLoanAgreement(long loanAgreementId) throws InvalidLoanAgreementException;
	public List<LoanAgreement> retrieveAllLoanAgreement();
	public LoanAgreement retrieveLoanAgreementById(long loanAgreementId)throws InvalidLoanAgreementException;

}