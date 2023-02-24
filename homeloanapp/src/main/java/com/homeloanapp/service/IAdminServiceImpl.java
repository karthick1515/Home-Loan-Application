package com.homeloanapp.service;


import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homeloanapp.entities.Admin;
import com.homeloanapp.repository.IAdminRepository;


@Service
public class IAdminServiceImpl implements IAdminService {
	
	Logger logger = Logger.getLogger(IAdminServiceImpl.class.getName());
	@Autowired
	IAdminRepository repository;
	@Override
	public Admin login(String email, String password) {
		Optional<Admin> optional = repository.findByEmailId(email);

Admin admin=optional.get();
		
		if(admin.getPassword().equals(password))
		{
				return admin;
		}else {
			return null;
		}
	}
	@Override
	public Admin addadmin(Admin admin) throws Exception{
		Optional<Admin> optional = repository.findByEmailId(admin.getEmailId());
		if (!optional.isPresent()) {
			repository.save(admin);
			return admin;
			}
		else {
			throw new Exception("The admin already have the account with this Email id....");
		}
		
	}
	
	

}

