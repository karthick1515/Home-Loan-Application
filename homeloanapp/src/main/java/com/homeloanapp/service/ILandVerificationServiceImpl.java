package com.homeloanapp.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeloanapp.entities.LandVerificationOfficer;
import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.exceptions.LandVerificationOfficerException;
import com.homeloanapp.repository.ILandVerificationRepository;
import com.homeloanapp.repository.ILoanApplicationRepository;


/*Land Verification Officer Service
 *ILandVerificationService checks for the existing of loan application and updates the status and 
 *other field as per necessity if existing
 *
 * */

@Service
public class ILandVerificationServiceImpl implements ILandVerificationService {

	Logger logger = Logger.getLogger(ILandVerificationServiceImpl.class.getName());
	@Autowired
	ILoanApplicationRepository lApplicationRepository;

	@Autowired
	ILandVerificationRepository landVerificationRepo;

	@Override
	@Transactional
	// method to check loan application is present in the DB, update if application
	// is present else invoke Exception class
	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException{

		Optional<LoanApplication> optional = lApplicationRepository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			lApplicationRepository.save(loanApplication);
			return loanApplication;
		} else {
			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");// returns updated loan
																								// application
		}
	}

	@Override
	public LandVerificationOfficer addLandVerificationOfficer(LandVerificationOfficer landVerificationOfficer) throws LandVerificationOfficerException {
		Optional<LandVerificationOfficer> optional =landVerificationRepo.findByEmailId(landVerificationOfficer.getEmailId());

		if (!optional.isPresent()) {
		    landVerificationRepo.save(landVerificationOfficer);
		    return landVerificationOfficer;
		} else {
		    throw new LandVerificationOfficerException("You already have an account with this email id.");
		}

	}

	@Override
	public LandVerificationOfficer updateLandVerificationOfficer(
			LandVerificationOfficer landVerificationOfficer) throws LandVerificationOfficerException {
		
		Optional<LandVerificationOfficer> optional = landVerificationRepo.findById(landVerificationOfficer.getLandverifyId());
		if (optional.isPresent()) {
		landVerificationRepo.save(landVerificationOfficer);
		return optional.get();
		} else {
		throw new LandVerificationOfficerException("Land Verification Officer couldn't be updated! ");
		}
	}

	@Override
	public LandVerificationOfficer deleteLandVerificationOfficer(int id)
			throws LandVerificationOfficerException {
		Optional<LandVerificationOfficer> optional = landVerificationRepo.findById(id);
		if (optional.isPresent()) {
			landVerificationRepo.deleteById(id);
			return optional.get();
		} else {
			throw new LandVerificationOfficerException("LandVerificationOfficer not found for delete operation!");
		}
	}

	@Override
	public LandVerificationOfficer viewLandVerificationOfficer(int id)
			throws LandVerificationOfficerException {
		Optional<LandVerificationOfficer> optional = landVerificationRepo.findById(id);
		try {

			if (optional.isPresent()) {
				landVerificationRepo.findById(id);
			} else {
				throw new LandVerificationOfficerException("LandVerificationOfficer not found with the matching ID!");
			}

		}catch (Exception e) {
			
			throw new LandVerificationOfficerException("LandVerificationOfficer not found with the matching ID!");
		}
		return optional.get();
	}

	@Override
	public List<LandVerificationOfficer> viewAllLandVerificationOfficer(){
	List<LandVerificationOfficer> landverifyofficerist = null;
	try {
		landverifyofficerist= landVerificationRepo.findAll();
	} catch (Exception e) {
		logger.info(e.getMessage());

	}

	return landverifyofficerist;
	}

	@Override
	public LandVerificationOfficer login(String email, String password) throws LandVerificationOfficerException {
		Optional<LandVerificationOfficer> optional = landVerificationRepo.findByEmailId(email);

		LandVerificationOfficer landVerificationofficer =optional.get();
		
		if(landVerificationofficer.getPassword().equals(password))
		{
				return landVerificationofficer;
		}else {
			throw new LandVerificationOfficerException("LandVerificationOfficer not found with the matching ID");
		}
	}

}
