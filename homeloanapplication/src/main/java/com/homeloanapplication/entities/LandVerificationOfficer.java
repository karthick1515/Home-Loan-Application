package com.homeloanapplication.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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
public class LandVerificationOfficer extends User {
  
	@NotEmpty(message = "Land Verification Officer Name can't be empty!")
		@Size(min = 3, max = 25, message = "Invalid Land Verification Officer Name please enter a vaild Name!")
		@Pattern(regexp = "^[A-Za-z]+", message = "INVALID PLEASE ENTER AGAIN")
		private String officerName;

       @NotEmpty(message = "Phone Number can't be empty!")
		@Size(min = 10, max = 10, message = "Invalid Phone Number please enter a vaild phone number of minimum 10 digits")
		@Pattern(regexp = "^\\d{10}$", message = "Invalid input:Enter numbers only")
		private String officerContact;

}
