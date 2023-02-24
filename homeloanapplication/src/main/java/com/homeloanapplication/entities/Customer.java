package com.homeloanapplication.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Customer extends User{
	@NotEmpty(message = "Customer Name can't be empty!")
	@Size(min = 3, max = 25, message = "Invalid Customer Name please enter a vaild Customer Name!")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Accepts only alphabets! re-enter the name")
	 private String customerName;
	
	@NotEmpty(message = "Phone Number can't be empty!")
	@Size(min = 10, max = 10, message = "Invalid Phone Number please enter a vaild phone number of minimum 10 digits")
	@Pattern(regexp = "^\\d{10}$", message = "Invalid input:Enter numbers only")
	     private String mobileNumber;
	
	@NotEmpty(message = "Email ID can't be empty!")
	@Size(min = 2, max = 30, message = "Invalid Email ID please enter a vaild email ID")
	@Email(message = "Not the proper Email ID format! enter again")
     private String emailId;
	
	@JsonFormat(pattern = "yyy-MM-dd")
	@Past
     private LocalDate dateOfBirth;
	
	@NotEmpty(message = "Gender can't be empty!")
	@Size(min = 4, max = 6, message = "Please enter Male/Female/Others")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Accepts only alphabets! re-enter the gender")
	 private String gender;
	
	@NotEmpty(message = "Nationality can't be empty!")
	@Size(min = 2, max = 15, message = "Please enter proper nationality")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Accepts only alphabets! re-enter the nationality")
	 private String nationality;
	
	@NotEmpty(message = "Aadhar Card number can't be empty!")
	@Size(min = 12, max = 12, message = "Please enter 12 digit AADHAR!")
	 private String aadharNumber;
	
	@NotEmpty(message = "PAN card number can't be empty!")
	@Size(min = 10, max = 10, message = "Please enter 10 digit PAN!")
	private String panNumber;
    }
