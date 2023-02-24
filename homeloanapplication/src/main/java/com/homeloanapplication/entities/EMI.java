package com.homeloanapplication.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;

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
@Table(name="emi_details")
@Entity
public class EMI {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
   	private long emiId;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dueDate;
	
	@DecimalMin(value = "0", message = "Emi should not be zero")
	private double emiAmount;
	
	@DecimalMin(value = "0", message = "Loan should not be zero")
	private double loanAmount;
	
	@DecimalMin(value = "0", message = "Interest should not be zero")
	private double interestAmount;
	
	
	@ManyToOne(cascade = CascadeType.ALL)//Owning side
	@JoinColumn(name = "loanAgreementId")
	private LoanAgreement loanagreement;

}
