package com.homeloanapp.service;
import java.util.List;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Manager;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.exceptions.ManagerException;

public interface IManagerService {
public Manager addManager(Manager financeVerification) throws ManagerException;
public Manager updateManager(Manager financeVerification) throws ManagerException;
public Manager deleteManager(int id) throws ManagerException;
public Manager viewManager(int id)throws ManagerException;
public List<Manager> viewAllManagers() throws ManagerException;
public Manager login(String email, String password) throws ManagerException;

public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException;
}
