package com.homeloanapp.testcases;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.time.LocalDate;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.homeloanapp.entities.Customer;
import com.homeloanapp.exceptions.CustomerNotFoundException;
import com.homeloanapp.service.ICustomerService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Customertestcases {

    @Autowired
    private ICustomerService customerService;

    @Test
    public void testCreateCustomer() throws CustomerNotFoundException {
       
    	Customer customer = new Customer();
    	customer.setCustomerId(1);
    	customer.setEmailId("john.doe@example.com");
    	customer.setPassword("Password123@");
    	customer.setCustomerName("John Doe");
    	customer.setMobileNumber("9876543210");
    	customer.setDateOfBirth(LocalDate.parse("1990-01-01"));
    	customer.setGender("Male");
    	customer.setNationality("Indian");
    	customer.setAadharNumber("123456789012");
         customer.setPanNumber("1234567890");
       
        customerService.addCustomer(customer);

        assertNotNull(customer.getEmailId());
    }

    @Test
    public void testGetCustomerById() throws CustomerNotFoundException {
    	Customer customer = new Customer();
    	customer.setCustomerId(1);
    	customer.setEmailId("john.doe@example.com");
    	customer.setPassword("Password123@");
    	customer.setCustomerName("John Doe");
    	customer.setMobileNumber("9876543210");
    	customer.setDateOfBirth(LocalDate.parse("1990-01-01"));
    	customer.setGender("Male");
    	customer.setNationality("Indian");
    	customer.setAadharNumber("123456789012");
         customer.setPanNumber("1234567890");

        customerService.addCustomer(customer);

        Customer retrievedCustomer = customerService.viewCustomer(customer.getCustomerId());

        assertEquals(customer, retrievedCustomer);
    }

    @Test
    public void testUpdateCustomer() throws CustomerNotFoundException {
    	Customer customer = new Customer();
    	customer.setCustomerId(1);
    	customer.setEmailId("john.doe@example.com");
    	customer.setPassword("Password123@");
    	customer.setCustomerName("John Doe");
    	customer.setMobileNumber("9876543210");
    	customer.setDateOfBirth(LocalDate.parse("1990-01-01"));
    	customer.setGender("Male");
    	customer.setNationality("Indian");
    	customer.setAadharNumber("123456789012");
         customer.setPanNumber("1234567890");

       
        customerService.updateCustomer(customer);

        Customer retrievedCustomer = customerService.viewCustomer(customer.getCustomerId());

        assertEquals("Jane Doe", retrievedCustomer.getCustomerName());
    }

    @Test
    public void testDeleteCustomerById() throws CustomerNotFoundException {
    	Customer customer = new Customer();
    	customer.setCustomerId(1);
    	customer.setEmailId("john.doe@example.com");
    	customer.setPassword("Password123@");
    	customer.setCustomerName("John Doe");
    	customer.setMobileNumber("9876543210");
    	customer.setDateOfBirth(LocalDate.parse("1990-01-01"));
    	customer.setGender("Male");
    	customer.setNationality("Indian");
    	customer.setAadharNumber("123456789012");
         customer.setPanNumber("1234567890");
        
         customerService.addCustomer(customer);
   
        customerService.deleteCustomer(customer.getCustomerId());
     
        Customer retrievedCustomer = customerService.viewCustomer(customer.getCustomerId());

        assertNull(retrievedCustomer);
    }
    
}
