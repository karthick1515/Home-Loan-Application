package com.homeloanapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapp.entities.Admin;


@Repository
public interface IAdminRepository extends JpaRepository<Admin, Integer> {

	Optional<Admin> findByEmailId(String email);

}

