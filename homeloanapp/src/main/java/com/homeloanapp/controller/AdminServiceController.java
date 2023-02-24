package com.homeloanapp.controller;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeloanapp.entities.Admin;
import com.homeloanapp.entities.Login;
import com.homeloanapp.exceptions.CustomerNotFoundException;
import com.homeloanapp.service.IAdminService;

import jakarta.validation.Valid;



@Validated
@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminServiceController {

	Logger logger = Logger.getLogger(AdminServiceController.class.getName());

	public AdminServiceController() {
		logger.log(Level.INFO,"-----> UserService Rest Controller Working!");
		
	}
    
	
	@Autowired
	IAdminService adminService;

	@PostMapping("/add") 
	public Admin addCustomer(@RequestBody @Valid Admin admin) throws Exception {
		 return  adminService.addadmin(admin);
		
	}
	
	@PostMapping("/login")
	public Admin exampleMethod(@RequestBody Login login) throws CustomerNotFoundException {
		 return adminService.login(login.getEmailId(), login.getPassword());
	   
	}
		
}
