package com.homeloanapp.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Manager;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.exceptions.ManagerException;
import com.homeloanapp.repository.ILoanApplicationRepository;
import com.homeloanapp.repository.IManagerRepository;

@Service
public class IManagerServiceImpl implements IManagerService {

	Logger logger = Logger.getLogger(IManagerServiceImpl.class.getName());
	@Autowired
	ILoanApplicationRepository fApplicationRepository;

	@Autowired
	IManagerRepository managerRepository;

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
	public Manager addManager(Manager manager) throws ManagerException {
		Optional<Manager> optional = managerRepository.findByEmailId(manager.getEmailId());

		if (!optional.isPresent()) {
		    managerRepository.save(manager);
		    return manager;
		} else {
		    throw new ManagerException("You already have an account with this email id.");
		}

	}

	@Override
	public Manager updateManager(Manager manager) throws ManagerException {
		
		Optional<Manager> optional = managerRepository.findById(manager.getManagerId());
		if (optional.isPresent()) {
		managerRepository.save(manager);
		return optional.get();
		} else {
		throw new ManagerException("Manager couldn't be updated! ");
		}
	}

	@Override
	public Manager deleteManager(int id) throws ManagerException {
		Optional<Manager> optional = managerRepository.findById(id);
		if (optional.isPresent()) {
			managerRepository.deleteById(id);
			return optional.get();
		} else {
			throw new ManagerException("Manager not found for delete operation!");
		}
	}

	@Override
	public Manager viewManager(int id) throws ManagerException {
		Optional<Manager> optional = managerRepository.findById(id);
		try {

			if (optional.isPresent()) {
				managerRepository.findById(id);
			} else {
				throw new ManagerException("Manager not found with the matching ID!");
			}

		}catch (Exception e) {
			
			throw new ManagerException("Manager not found with the matching ID!");
		}
		return optional.get();
	}

	@Override
	public List<Manager> viewAllManagers() throws ManagerException {
	List<Manager> managerList = null;
	try {
		managerList = managerRepository.findAll();
	} catch (Exception e) {
		logger.info(e.getMessage());

	}

	return managerList;
	}

	@Override
	public Manager login(String email, String password) throws ManagerException {
		Optional<Manager> optional = managerRepository.findByEmailId(email);

		Manager manager =optional.get();
		
		if(manager.getPassword().equals(password))
		{
				return manager;
		}else {
			throw new ManagerException("Manager not found with the matching ID!");

		}
			
		
	}


}
