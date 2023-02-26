package com.homeloanapp.testcases;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.homeloanapp.entities.Admin;
import com.homeloanapp.entities.Manager;
import com.homeloanapp.service.IAdminService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminTestcases {

	@Autowired
	IAdminService service;
	
    @Test
    public void testConstructor() {
    	Admin officer = new Admin(1, "john.doe@example.com", "Password1234@","Admin" ,"Jhon","9715219743");

    	assertEquals(1, officer.getAdminId());
        assertEquals("john.doe@example.com", officer.getEmailId());
        assertEquals("Password1234@", officer.getPassword());
        assertEquals("Landverificationofficer", officer.getRole());
        assertEquals("Jhon", officer.getOfficerName());
        assertEquals("9715219743 ", officer.getOfficerContact());
    }
    
    @Test
    public void testToString() {
    	Admin officer = new Admin(1, "john.doe@example.com", "Password1234@","Admin" ,"Jhon","9715219743");
    	
    	assertEquals("Manager(AdminId=1, emailId=john.doe@example.com, password=password,  AdminName=Jhon ,AdminContact=9715219743)", officer.toString());
    }
    
    @Test
    public void testEqualsAndHashCode() {
    	Admin officer = new Admin(1, "john.doe@example.com", "Password1234@","Admin" ,"Jhon","9715219743");
    	Admin officer2 = new Admin(2, "john@example.com", "Password124@","Admin" ,"JhonRam","9715219743");
    	assertEquals(officer, officer2);
        assertEquals(officer.hashCode(), officer2.hashCode());
    }
    
}