package com.homeloanapp.testcases;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.homeloanapp.entities.FinanceVerificationOfficer;
import com.homeloanapp.service.IFinanceVerificationService;

class FinanceVerificationOfficerTest {

	@Autowired
	IFinanceVerificationService service;
	
    @Test
    void testFinanceVerificationOfficerValidInput() {
        FinanceVerificationOfficer officer = new FinanceVerificationOfficer();
        officer.setEmailId("johndoe@gmail.com");
        officer.setPassword("Abcd@123");
        officer.setRole("Officer");
        officer.setFinOfficerName("John Doe");
        officer.setFinOfficerContact("1234567890");
        Assertions.assertDoesNotThrow(() -> officer.toString());
    }

    @Test
    void testFinanceVerificationOfficerInvalidEmail() {
        FinanceVerificationOfficer officer = new FinanceVerificationOfficer();
        officer.setEmailId("johndoegmail.com"); // Invalid email format
        officer.setPassword("Abcd@123");
        officer.setRole("Officer");
        officer.setFinOfficerName("John Doe");
        officer.setFinOfficerContact("1234567890");
        Assertions.assertThrows(Exception.class, () -> officer.toString());
    }

    @Test
    void testFinanceVerificationOfficerInvalidPassword() {
        FinanceVerificationOfficer officer = new FinanceVerificationOfficer();
        officer.setEmailId("johndoe@gmail.com");
        officer.setPassword("abcd123"); // Invalid password format
        officer.setRole("Officer");
        officer.setFinOfficerName("John Doe");
        officer.setFinOfficerContact("1234567890");
        Assertions.assertThrows(Exception.class, () -> officer.toString());
    }

    @Test
    void testFinanceVerificationOfficerInvalidRole() {
        FinanceVerificationOfficer officer = new FinanceVerificationOfficer();
        officer.setEmailId("johndoe@gmail.com");
        officer.setPassword("Abcd@123");
        officer.setRole("Officer123"); // Invalid role format
        officer.setFinOfficerName("John Doe");
        officer.setFinOfficerContact("1234567890");
        Assertions.assertThrows(Exception.class, () -> officer.toString());
    }

    @Test
    void testFinanceVerificationOfficerInvalidContact() {
        FinanceVerificationOfficer officer = new FinanceVerificationOfficer();
        officer.setEmailId("johndoe@gmail.com");
        officer.setPassword("Abcd@123");
        officer.setRole("Officer");
        officer.setFinOfficerName("JohnDoe");
        officer.setFinOfficerContact("12345678910"); // Invalid contact format
        Assertions.assertThrows(Exception.class, () -> officer.toString());
    }
}
