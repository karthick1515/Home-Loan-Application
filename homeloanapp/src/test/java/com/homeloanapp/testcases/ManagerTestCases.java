package com.homeloanapp.testcases;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.homeloanapp.entities.Manager;
import com.homeloanapp.service.IManagerService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ManagerTestCases {

	@Autowired
	IManagerService service;
	
    @Test
    public void testConstructor() {
    	Manager officer = new Manager(1, "john.doe@example.com", "Password1234@","Manager" ,"Jhon","9715219743");

    	assertEquals(1, officer.getManagerId());
        assertEquals("john.doe@example.com", officer.getEmailId());
        assertEquals("Password1234@", officer.getPassword());
        assertEquals("Landverificationofficer", officer.getRole());
        assertEquals("Jhon", officer.getManagerName());
        assertEquals("9715219743 ", officer.getManagerContact());
    }
    
    @Test
    public void testToString() {
    	 Manager officer = new Manager(1, "john.doe@example.com", "Password1234@","Manager" ,"Jhon","9715219743");

    	assertEquals("Manager(ManagerId=1, emailId=john.doe@example.com, password=password,  managerName=Jhon ,managerContact=9715219743)", officer.toString());
    }
    
    @Test
    public void testEqualsAndHashCode() {
    	Manager officer = new Manager(1, "john.doe@example.com", "Password1234@","Manager" ,"Jhon","9715219743");
    	Manager officer2 = new Manager(1, "john.doe@example.com", "Password1234@","Manager" ,"Jhon","9715219743");

    	assertEquals(officer, officer2);
        assertEquals(officer.hashCode(), officer2.hashCode());
    }
    
}