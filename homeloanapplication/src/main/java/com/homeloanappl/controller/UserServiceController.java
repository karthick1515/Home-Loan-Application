package com.homeloanappl.controller;

import java.util.logging.Level; 
import java.util.logging.Logger;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapplication.entities.Admin;
import com.homeloanapplication.entities.FinanceVerificationOfficer;
import com.homeloanapplication.entities.LandVerificationOfficer;
import com.homeloanapplication.entities.User;
import com.homeloanapplication.service.IUserService;





@RestController
@RequestMapping("/user")
public class UserServiceController {
	Logger logger = Logger.getLogger(LoanAgreementController.class.getName());	
	
	public UserServiceController() {
		logger.log(Level.INFO,"----->Inside User Service Controller Working!");
	}
	
	@Autowired
	IUserService userService;
	
	@PostMapping("/adduserasadmin")
	public Admin addNewUser(@RequestBody Admin admin) {
		this.userService.addNewUser(admin);
		return admin;
		
	}
	
	@PostMapping("/adduseraslandofficer")
	public LandVerificationOfficer addNewUser(@RequestBody LandVerificationOfficer landOfficerVerificationOfficer) {
		this.userService.addNewUser(landOfficerVerificationOfficer);
		return landOfficerVerificationOfficer;
		
	}
	
	@PostMapping("/adduserasfinanceofficer")
	public FinanceVerificationOfficer addNewUser(@RequestBody FinanceVerificationOfficer financeVerificationOfficer) {
		this.userService.addNewUser(financeVerificationOfficer);
		return financeVerificationOfficer;
		
	}
	
	@PostMapping("/signin")
	public User signIn(@RequestBody User user) {
		this.userService.signIn(user);
		return user;
		
	}

	@PostMapping("/signout")
	public User signOut(@RequestBody User user) {
		this.userService.signOut(user);
		return user;
		
	}
}