package com.homeloanapp.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeloanapp.entities.FinanceVerificationOfficer;
import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.exceptions.FinanceVerificationOfficerException;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.repository.IFinanceVerificationRepository;
import com.homeloanapp.repository.ILoanApplicationRepository;


@Service
public class IFinanceVerificationServiceImpl implements IFinanceVerificationService {

	Logger logger = Logger.getLogger(IFinanceVerificationServiceImpl.class.getName());
	@Autowired
	ILoanApplicationRepository fApplicationRepository;

	@Autowired
	IFinanceVerificationRepository financeVerificationRepo;
	
	@Override
	@Transactional
	// method to check loan application is present in the DB, update if application
	// is present else invoke Exception class
	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException{

		Optional<LoanApplication> optional = fApplicationRepository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			fApplicationRepository.save(loanApplication);
			return loanApplication;
		} else {
			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");// returns updated loan
																								// application
		}
	}

	@Override
	public FinanceVerificationOfficer addFinanceVerificationOfficer(FinanceVerificationOfficer financeVerificationOfficer) throws FinanceVerificationOfficerException {
		Optional<FinanceVerificationOfficer> optional =financeVerificationRepo.findByEmailId(financeVerificationOfficer.getEmailId());
	
		if (!optional.isPresent()) {
		    financeVerificationRepo.save(financeVerificationOfficer);
		    return financeVerificationOfficer;
		} else {
		    throw new FinanceVerificationOfficerException("You already have an account with this email id.");
		}

	}

	@Override
	public FinanceVerificationOfficer updateFinanceVerificationOfficer(
			FinanceVerificationOfficer financeVerificationOfficer) throws FinanceVerificationOfficerException {
		
		Optional<FinanceVerificationOfficer> optional = financeVerificationRepo.findById(financeVerificationOfficer.getFinanceverificationId());
		if (optional.isPresent()) {
		financeVerificationRepo.save(financeVerificationOfficer);
		return optional.get();
		} else {
		throw new FinanceVerificationOfficerException("Finance Verification Officer couldn't be updated! ");
		}
	}

	@Override
	public FinanceVerificationOfficer deleteFinanceVerificationOfficer(int id)
			throws FinanceVerificationOfficerException {
		Optional<FinanceVerificationOfficer> optional = financeVerificationRepo.findById(id);
		if (optional.isPresent()) {
			financeVerificationRepo.deleteById(id);
			return optional.get();
		} else {
			throw new FinanceVerificationOfficerException("FinanceVerificationOfficer not found for delete operation!");
		}
	}

	@Override
	public FinanceVerificationOfficer viewFinanceVerificationOfficer(int id)
			throws FinanceVerificationOfficerException {
		Optional<FinanceVerificationOfficer> optional = financeVerificationRepo.findById(id);
		try {

			if (optional.isPresent()) {
				financeVerificationRepo.findById(id);
			} else {
				throw new FinanceVerificationOfficerException("FinanceVerificationOfficer not found with the matching ID!");
			}

		}catch (Exception e) {
			
			throw new FinanceVerificationOfficerException("FinanceVerificationOfficer not found with the matching ID!");
		}
		return optional.get();
	}

	@Override
	public List<FinanceVerificationOfficer> viewAllFinanceVerificationOfficer(){
	List<FinanceVerificationOfficer> financeverifyofficerist = null;
	try {
		financeverifyofficerist= financeVerificationRepo.findAll();
	} catch (Exception e) {
		logger.info(e.getMessage());

	}

	return financeverifyofficerist;
	}

	@Override
	public FinanceVerificationOfficer login(String email, String password) throws FinanceVerificationOfficerException {
		Optional<FinanceVerificationOfficer> optional = financeVerificationRepo.findByEmailId(email);

		FinanceVerificationOfficer financeVerificationofficer =optional.get();
		
		if(financeVerificationofficer.getPassword().equals(password))
		{
				return financeVerificationofficer;
		}else {
			throw new FinanceVerificationOfficerException("FinanceVerificationOfficer not found with the matching ID!");

		}
			
		
	}

}
