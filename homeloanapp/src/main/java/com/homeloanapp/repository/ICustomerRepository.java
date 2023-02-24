package com.homeloanapp.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapp.entities.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {


		public Optional<Customer> findByEmailId(String email);

}
