package com.amol.garje.Binding;

import org.springframework.boot.jackson.JsonComponent;

@JsonComponent
public class FeedBackForm {
	Integer userid;
	
	Integer rating;
	
	String feedback;

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
		return "FeedBackForm [ userid=" + userid + ", rating=" + rating + ", feedback=" + feedback + "]";
	}
	
	

	
	
}
