package com.homeloanapp.testcases;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.homeloanapp.entities.LandVerificationOfficer;
import com.homeloanapp.service.ILandVerificationService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LandVerificationTestCases {

	@Autowired
	ILandVerificationService service;
	
    @Test
    public void testConstructor() {
        LandVerificationOfficer officer = new LandVerificationOfficer(1, "john.doe@example.com", "Password1234@","Landverificationofficer" ,"Jhon","9715219743 ");
        assertEquals(1, officer.getLandverifyId());
        assertEquals("john.doe@example.com", officer.getEmailId());
        assertEquals("Password1234@", officer.getPassword());
        assertEquals("Landverificationofficer", officer.getRole());
        assertEquals("Jhon", officer.getOfficerName());
        assertEquals("9715219743 ", officer.getOfficerContact());
    }
    
    @Test
    public void testToString() {
    	LandVerificationOfficer officer = new LandVerificationOfficer(1, "john.doe@example.com", "Password1234@","Landverificationofficer" ,"Jhon","9715219743");
    	assertEquals("LandVerificationOfficer(landverifyId=1, emailId=john.doe@example.com, password=password, officerName=Jhon ,officerContact=9715219743)", officer.toString());
    }
    
    @Test
    public void testEqualsAndHashCode() {
    	LandVerificationOfficer officer = new LandVerificationOfficer(1, "john.doe@example.com", "Password1234@","Landverificationofficer" ,"Jhon","9715219743");
    	LandVerificationOfficer officer2 = new LandVerificationOfficer(2, "akash@example.com", "Password1234@%","Landverificationofficer" ,"Akash","9715219743");
    	assertEquals(officer, officer2);
        assertEquals(officer.hashCode(), officer2.hashCode());
    }
    
}
