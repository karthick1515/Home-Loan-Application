package com.homeloanapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapp.entities.LandVerificationOfficer;

@Repository
public interface ILandVerificationRepository extends JpaRepository<LandVerificationOfficer, Integer> {

	Optional<LandVerificationOfficer> findByEmailId(String email);
	
}

