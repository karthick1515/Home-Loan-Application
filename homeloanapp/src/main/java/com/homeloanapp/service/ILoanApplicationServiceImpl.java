package com.homeloanapp.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.repository.ILoanApplicationRepository;



@Service
public class ILoanApplicationServiceImpl implements ILoanApplicationService {
	Logger logger = Logger.getLogger(ILoanApplicationServiceImpl.class.getName());

	@Autowired
	ILoanApplicationRepository repository;

	public ILoanApplicationServiceImpl(ILoanApplicationRepository repository) {
		super();
		this.repository = repository;
	}

	@Transactional
	@Override
	public LoanApplication addLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findByCustomerId(loanApplication.getCustomerId());
		if (!optional.isPresent()) {
			repository.save(loanApplication);
			return loanApplication;
			}
		else {
			throw new InvalidLoanApplicationException("Loan application couldn't be added because your already applied! ");
		}
		
		
	}

	@Transactional
	@Override
	public LoanApplication updateLoanApplication(LoanApplication loanApplication)
			throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			repository.save(loanApplication);
			return optional.get();
		} else {

			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");
		}

	}

	@Transactional
	@Override
	public LoanApplication deleteLoanApplication(int loanApplicationId) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplicationId);
		if (optional.isPresent()) {
			repository.deleteById(loanApplicationId);
			return optional.get();
		} else {
			throw new InvalidLoanApplicationException("Loan application ID not found for delete operation!");
		}

	}

	@Override
	public List<LoanApplication> retrieveAllLoanApplication() {

		List<LoanApplication> list = null;
		try {
			list = repository.findAll();
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return list;
	}

	@Override
	public LoanApplication retrieveLoanApplicationById(int loanApplicationId) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplicationId);
		if (optional.isPresent()) {
			repository.findById(loanApplicationId);
			return optional.get();
		} else {
			throw new InvalidLoanApplicationException("Loan application ID not found in records!");
		}
	}

	@Override
	public LoanApplication getapplicationbycustomerId(int customerId) throws InvalidLoanApplicationException {
		Optional<LoanApplication> optional = repository.findByCustomerId(customerId);
		if (optional.isPresent()) {
			repository.findByCustomerId(customerId);
			return optional.get();
		} else {
			throw new InvalidLoanApplicationException("Loan application ID not found in records!");
		}
		
		
	}

}