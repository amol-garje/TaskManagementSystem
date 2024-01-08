package com.amol.garje.Binding;

import org.springframework.boot.jackson.JsonComponent;

@JsonComponent
public class LoginBinding {
	
	String empid;
	String name;
	String password;
		
	public String getEmpid() {
		return empid;
	}

	public void setEmpid(String empid) {
		this.empid = empid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginBinding [empid=" + empid + ", name=" + name + ", password=" + password + "]";
	}
    
	
}
