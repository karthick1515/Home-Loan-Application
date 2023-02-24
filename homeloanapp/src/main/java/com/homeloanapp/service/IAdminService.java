package com.homeloanapp.service;

import com.homeloanapp.entities.Admin;

public interface IAdminService  {
	public Admin login(String email,String password);
    public Admin addadmin(Admin admin) throws Exception;
}
