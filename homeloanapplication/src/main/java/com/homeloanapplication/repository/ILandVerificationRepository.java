package com.homeloanapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapplication.entities.LandVerificationOfficer;

@Repository
public interface ILandVerificationRepository extends JpaRepository<LandVerificationOfficer, Integer> {
	


}