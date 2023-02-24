package com.homeloanapplication;

import java.util.logging.Level; 
import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomeloanApplication {
	

	public static void main(String[] args) {
		Logger logger = Logger.getLogger(HomeloanApplication.class.getName());
		SpringApplication.run(HomeloanApplication.class, args);
		logger.log(Level.INFO, "-------> SWAGGER Working OK!");
	}

	
}