package com.homeloanapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapp.entities.FinanceVerificationOfficer;

@Repository
public interface IFinanceVerificationRepository extends JpaRepository<FinanceVerificationOfficer, Integer> {

	Optional<FinanceVerificationOfficer> findByEmailId(String emailId);

	

}