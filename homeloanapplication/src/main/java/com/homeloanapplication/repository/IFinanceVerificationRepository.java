package com.homeloanapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapplication.entities.LoanApplication;

@Repository
public interface IFinanceVerificationRepository extends JpaRepository<LoanApplication, Integer>{


}