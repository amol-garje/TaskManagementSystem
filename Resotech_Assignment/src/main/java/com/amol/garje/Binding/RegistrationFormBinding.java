package com.amol.garje.Binding;

import org.springframework.boot.jackson.JsonComponent;

@JsonComponent
public class RegistrationFormBinding {
	 String name;
     String password;
     String gender;
     String email;
     public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	String country;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "RegistrationFormBinding [name=" + name + ", password=" + password + ", gender=" + gender + ", email="
				+ email + ", country=" + country + "]";
	}
	
}
