package com.homeloanapp.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="loan_application_details")
public class LoanApplication {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int applicationId;

	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate applicationDate;

	
	private int customerId;

	
	private double loanAppliedAmount;

	
	private double loanApprovedAmount;

	
	@Enumerated(EnumType.STRING)
	private Status landVerificationApproval;
	
	
	@Enumerated(EnumType.STRING)
	private Status financeVerificationApproval;
	
	
	@Enumerated(EnumType.STRING)
	private Status adminApproval;
	
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
    private String customerAddress;
	
	private String occupation;
	
	private String annualSalary;
	
	private String companyAddress;
	
	private String neededtimetoreturn;
	
	
}
