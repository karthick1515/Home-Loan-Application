package com.homeloanapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapplication.entities.LoanAgreement;

@Repository
public interface ILoanAgreementRepository extends JpaRepository<LoanAgreement, Long> {
	

}