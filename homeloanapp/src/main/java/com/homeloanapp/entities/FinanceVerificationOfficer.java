package com.homeloanapp.entities;


import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
public class FinanceVerificationOfficer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int financeverificationId;
    
	@NotEmpty(message = "Email ID can't be empty!")
	@Size(min = 2, max = 30, message = "Invalid Email ID please enter a vaild email ID")
	@Email(message = "Not the proper Email ID format! enter again")
	private String emailId;
	
	@NotEmpty
	@NotEmpty(message = "Password can't be empty!")
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")
	private String password;

	@NotEmpty(message = "Role Type can't be empty!")
	@Size(min = 2, max = 40, message = "Invalid Role please enter a vaild Role!")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Accepts only alphabets! re-enter the role")
	private String role;
		
	
	@Size(min = 3, max = 25, message = "Invalid Finance Verification Officer Name please enter a vaild Name!")
	@Pattern(regexp = "^[A-Za-z]+", message = "INVALID PLEASE ENTER AGAIN")
	private String finOfficerName;
	
	@NotEmpty(message = "Phone Number can't be empty!")
	@Size(min = 10, max = 10, message = "Invalid Phone Number please enter a vaild phone number of minimum 10 digits")
	@Pattern(regexp = "^\\d{10}$", message = "Invalid input:Enter numbers only")
	private String finOfficerContact;
	
}
