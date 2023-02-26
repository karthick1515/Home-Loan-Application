package com.homeloanapp.testcases;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.homeloanapp.entities.LoanApplication;
import com.homeloanapp.entities.Status;
import com.homeloanapp.exceptions.InvalidLoanApplicationException;
import com.homeloanapp.repository.ILoanApplicationRepository;
import com.homeloanapp.service.ILoanApplicationService;



@RunWith(SpringRunner.class)
@SpringBootTest
public class LoanApplicationTestCases {
	
	@Autowired
    private ILoanApplicationService service;
@Autowired
private ILoanApplicationRepository repository;
       
	@Test
	public void testAddLoanApplication() throws InvalidLoanApplicationException {
	    // Create a new loan application
	    LoanApplication loanApplication = new LoanApplication();
	    loanApplication.setCustomerId(123);
	    loanApplication.setLoanAppliedAmount(10000.00);
	    loanApplication.setApplicationDate(LocalDate.now());
	    loanApplication.setStatus(Status.PENDING);
	    loanApplication.setLandVerificationApproval(Status.PENDING);
	    loanApplication.setFinanceVerificationApproval(Status.PENDING);
	    loanApplication.setAdminApproval(Status.PENDING);
	    Mockito.when(repository.findByCustomerId(123)).thenReturn(Optional.empty());

	   
	    LoanApplication addedLoanApplication = service.addLoanApplication(loanApplication);
	    assertNotNull(addedLoanApplication);
	}

	@Test(expected = InvalidLoanApplicationException.class)
	public void testAddLoanApplicationAlreadyApplied() throws InvalidLoanApplicationException {
	    // Create a new loan application
	    LoanApplication loanApplication = new LoanApplication();
	    loanApplication.setCustomerId(123);
	    loanApplication.setLoanAppliedAmount(10000.00);
	    loanApplication.setApplicationDate(LocalDate.now());
	    loanApplication.setStatus(Status.PENDING);
	    loanApplication.setLandVerificationApproval(Status.PENDING);
	    loanApplication.setFinanceVerificationApproval(Status.PENDING);
	    loanApplication.setAdminApproval(Status.PENDING);

	   
	    Mockito.when(repository.findByCustomerId(123)).thenReturn(Optional.of(loanApplication));

	   
	    service.addLoanApplication(loanApplication);
	}

	@Test
	public void testUpdateLoanApplication() throws InvalidLoanApplicationException {
	    LoanApplication loanApplication = new LoanApplication();
	    loanApplication.setCustomerId(123);
	    loanApplication.setLoanAppliedAmount(10000.00);
	    loanApplication.setApplicationDate(LocalDate.now());
	    loanApplication.setStatus(Status.PENDING);
	    loanApplication.setLandVerificationApproval(Status.PENDING);
	    loanApplication.setFinanceVerificationApproval(Status.PENDING);
	    loanApplication.setAdminApproval(Status.PENDING);
	   
	    Mockito.when(repository.findById(1)).thenReturn(Optional.of(loanApplication));
   
	    loanApplication.setStatus(Status.APPROVED);
   
	    LoanApplication updatedLoanApplication = service.updateLoanApplication(loanApplication);
	    assertEquals(Status.APPROVED, updatedLoanApplication.getStatus());
	}

	@Test(expected = InvalidLoanApplicationException.class)
	public void testUpdateLoanApplicationNotFound() throws InvalidLoanApplicationException {
	  
	    LoanApplication loanApplication = new LoanApplication();
	    loanApplication.setCustomerId(123);
	    loanApplication.setLoanAppliedAmount(10000.00);
	    loanApplication.setApplicationDate(LocalDate.now());
	    loanApplication.setStatus(Status.PENDING);
	    loanApplication.setLandVerificationApproval(Status.PENDING);
	    loanApplication.setFinanceVerificationApproval(Status.PENDING);
	    loanApplication.setAdminApproval(Status.PENDING);
	    
	    Mockito.when(repository.findById(1)).thenReturn(Optional.empty());

	   }

}
