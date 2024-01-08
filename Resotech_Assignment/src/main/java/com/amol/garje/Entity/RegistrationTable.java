package com.amol.garje.Entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class RegistrationTable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	String name;
	String password;
	String gender;
	String email;
	String country;

	@CreationTimestamp
	@Column(updatable = false)
	LocalDateTime registerdate;

	@CreationTimestamp
	@Column(insertable = false)
	LocalDateTime updatedate;

	public LocalDateTime getRegisterdate() {
		return registerdate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setRegisterdate(LocalDateTime registerdate) {
		this.registerdate = registerdate;
	}

	public LocalDateTime getUpdatedate() {
		return updatedate;
	}

	public void setUpdatedate(LocalDateTime updatedate) {
		this.updatedate = updatedate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
		return "RegistrationTable [id=" + id + ", name=" + name + ", password=" + password + ", gender=" + gender
				+ ", email=" + email + ", country=" + country + ", registerdate=" + registerdate + ", updatedate="
				+ updatedate + "]";
	}
}
