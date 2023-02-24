package com.homeloanapplication.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.FutureOrPresent;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name="loan_application_details")
@Entity
public class LoanApplication {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long applicationId;
	
	@Column
	//@ApiModelProperty(name = "Loan application date", value = "It holds the loan application date", required = true)
	@FutureOrPresent
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate applicationDate;
	
	@OneToOne
	@JoinColumn(name = "user_Info", referencedColumnName = "userId")
	private Customer customer;
	
	@OneToOne(mappedBy="loanapplication") //inverse side
	private LoanAgreement loanagreement;

	@Column
	//@ApiModelProperty(name = "Loan applied amount", value = "It holds the loan applied amount", required = true)
	@DecimalMin(value = "0", message = "Loan applied amount should not be less than thousand values")
	private double loanAppliedAmount;
	
	@Column
	//@ApiModelProperty(name = "Loan approved amount", value = "It holds the loan approved amount", required = true)
	@DecimalMin(value = "0", message = "Loan approved amount should not be less than thousand values")
	private double loanApprovedAmount;

	
	private boolean landVerificationApproval;

	private boolean financeVerificationApproval;
	private boolean adminApproval;
	private Status status;
}
