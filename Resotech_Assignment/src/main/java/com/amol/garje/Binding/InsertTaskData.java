package com.amol.garje.Binding;


import org.springframework.boot.jackson.JsonComponent;

@JsonComponent
public class InsertTaskData {
      Integer emptaskid;
      String emptasktitle;
      String emptasklocaton;
      String emptaskstarttime;
      String emptaskendtime;
      String emptaskstartdate;
      String emptaskenddate;
      Integer emptaskmember;
      String emptaskdescription;
	public Integer getEmptaskid() {
		return emptaskid;
	}
	public void setEmptaskid(Integer emptaskid) {
		this.emptaskid = emptaskid;
	}
	public String getEmptasktitle() {
		return emptasktitle;
	}
	public void setEmptasktitle(String emptasktitle) {
		this.emptasktitle = emptasktitle;
	}
	public String getEmptasklocaton() {
		return emptasklocaton;
	}
	public void setEmptasklocaton(String emptasklocaton) {
		this.emptasklocaton = emptasklocaton;
	}
	public String getEmptaskstarttime() {
		return emptaskstarttime;
	}
	public void setEmptaskstarttime(String emptaskstarttime) {
		this.emptaskstarttime = emptaskstarttime;
	}
	public String getEmptaskendtime() {
		return emptaskendtime;
	}
	public void setEmptaskendtime(String emptaskendtime) {
		this.emptaskendtime = emptaskendtime;
	}
	public String getEmptaskstartdate() {
		return emptaskstartdate;
	}
	public void setEmptaskstartdate(String emptaskstartdate) {
		this.emptaskstartdate = emptaskstartdate;
	}
	public String getEmptaskenddate() {
		return emptaskenddate;
	}
	public void setEmptaskenddate(String emptaskenddate) {
		this.emptaskenddate = emptaskenddate;
	}
	public Integer getEmptaskmember() {
		return emptaskmember;
	}
	public void setEmptaskmember(Integer emptaskmember) {
		this.emptaskmember = emptaskmember;
	}
	public String getEmptaskdescription() {
		return emptaskdescription;
	}
	public void setEmptaskdescription(String emptaskdescription) {
		this.emptaskdescription = emptaskdescription;
	}
	@Override
	public String toString() {
		return "InsertTaskData [emptaskid=" + emptaskid + ", emptasktitle=" + emptasktitle + ", emptasklocaton="
				+ emptasklocaton + ", emptaskstarttime=" + emptaskstarttime + ", emptaskendtime=" + emptaskendtime
				+ ", emptaskstartdate=" + emptaskstartdate + ", emptaskenddate=" + emptaskenddate + ", emptaskmember="
				+ emptaskmember + ", emptaskdescription=" + emptaskdescription + "]";
	}      
}
