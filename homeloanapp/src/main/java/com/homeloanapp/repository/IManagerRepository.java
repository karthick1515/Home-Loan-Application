package com.homeloanapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeloanapp.entities.Manager;

@Repository
public interface IManagerRepository extends JpaRepository<Manager, Integer> {

	Optional<Manager> findByEmailId(String email);

}
