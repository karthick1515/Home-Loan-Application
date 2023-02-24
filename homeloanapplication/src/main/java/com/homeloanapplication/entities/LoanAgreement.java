package com.homeloanapplication.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
@Table(name="loan_agreement_details")
@Entity
public class LoanAgreement{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long loanAgreementId;
	@OneToOne(cascade = CascadeType.ALL)
	private  long loanapplication;
	@OneToMany(mappedBy = "loanagreement")
		private Set<EMI> allemis = new HashSet<>();
	
	
}
