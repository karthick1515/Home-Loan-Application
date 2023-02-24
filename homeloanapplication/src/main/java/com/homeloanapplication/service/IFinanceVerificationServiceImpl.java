package com.homeloanapplication.service;

import java.util.Optional;


import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homeloanapplication.entities.LoanApplication;
import com.homeloanapplication.exception.InvalidLoanApplicationException;
import com.homeloanapplication.repository.ILoanApplicationRepository;
@Service
public class IFinanceVerificationServiceImpl implements IFinanceVerificationService {

	@Autowired
	ILoanApplicationRepository fApplicationRepository;

	public IFinanceVerificationServiceImpl(ILoanApplicationRepository applicationRepository) {
		super();
		this.fApplicationRepository = applicationRepository;
	}

	@Override
	@Transactional
	// method to check loan application is present in the DB, update if application
	// is present else invoke Exception class
	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = fApplicationRepository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			fApplicationRepository.save(loanApplication);
			return loanApplication;
		} else {
			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");// returns updated loan
																								// application

		}
	}

}
