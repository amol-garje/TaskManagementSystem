package com.amol.garje.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FeedBackFormEntity {
	
    
    @GeneratedValue(strategy = GenerationType.AUTO)   
    @Id
    Integer id;      
    
	Integer userid; 
    
	Integer rating; 
	                
	String feedback;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "FeedBackFormEntity [id=" + id + ", userid=" + userid + ", rating=" + rating + ", feedback=" + feedback
				+ "]";
	}
	
	
	
	                
	
	
}
