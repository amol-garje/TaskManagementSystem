package com.amol.garje.Controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.amol.garje.Binding.FeedBackForm;
import com.amol.garje.Binding.InsertTaskData;
import com.amol.garje.Binding.LoginBinding;
import com.amol.garje.Binding.RegistrationFormBinding;
import com.amol.garje.Entity.FeedBackFormEntity;
import com.amol.garje.Entity.InsertTaskDataEntity;
import com.amol.garje.Entity.RegistrationTable;
import com.amol.garje.EntityRepo.FeedBackFormEntityRepo;
import com.amol.garje.EntityRepo.InsertTaskDataEntityRepo;
import com.amol.garje.EntityRepo.RegistrationTableRepo;

@RestController
@CrossOrigin   // This Is Very Important....
public class RegistrationAndLoginController {
	
	RegistrationTableRepo database;
	InsertTaskDataEntityRepo inserttaskrepo;
	FeedBackFormEntityRepo feedback;
	@Autowired
	public RegistrationAndLoginController(RegistrationTableRepo database,InsertTaskDataEntityRepo inserttaskrepo,FeedBackFormEntityRepo feedback) {
	   this.database=database;
	   this.inserttaskrepo=inserttaskrepo;
	   this.feedback=feedback;
	}
    
	// Register Data Insert Rest-Api
	@PostMapping(value = "/GetData",consumes = {"application/json"},produces = {"application/json"})
	public ResponseEntity<RegistrationTable> getRegistrationData(@RequestBody RegistrationFormBinding rfb){
		
		RegistrationTable tmp=new RegistrationTable();
		tmp.setName(rfb.getName());
		tmp.setPassword(rfb.getPassword());
		tmp.setGender(rfb.getGender());
		tmp.setCountry(rfb.getCountry());
		tmp.setEmail(rfb.getEmail());
		RegistrationTable save = database.save(tmp);
		return new ResponseEntity<>(save,HttpStatus.OK);
		
	}
	
	// To Fetch Data Or Valid the User...
	@PostMapping(value = "/LoginValidate",consumes = {"application/json"},produces = {"text/plain"})
	public ResponseEntity<String> getAllData(@RequestBody LoginBinding lgnd){
		String empid = lgnd.getEmpid();
		Integer empidd=Integer.valueOf(empid);
		System.out.println("Your DataBase Id is"+empidd);
		Optional<RegistrationTable> findById = database.findById(empidd);
		RegistrationTable registrationTable = findById.get();
		System.out.println("Your DataBase Value is"+registrationTable);
		
		if(registrationTable!=null && registrationTable.getName().equals(lgnd.getName())&&registrationTable.getPassword().equals(lgnd.getPassword())) {
		    return new ResponseEntity<>("true",HttpStatus.OK);
		}else {
			 return new ResponseEntity<>("false",HttpStatus.OK);
		}
	}
	
	//Inserting The Task Rest-Api
	@PostMapping(value ="/InsertTask",consumes = {"application/json"},produces = {"application/json"})
	public ResponseEntity<InsertTaskDataEntity> InsertTaskQuery(@RequestBody InsertTaskData task){
		
		InsertTaskDataEntity mm=new InsertTaskDataEntity();
		mm.setEmptaskdescription(task.getEmptaskdescription());
		mm.setEmptaskid(task.getEmptaskid());
		mm.setEmptaskenddate(task.getEmptaskenddate());
		mm.setEmptaskendtime(task.getEmptaskendtime());
		mm.setEmptasklocaton(task.getEmptasklocaton());
		mm.setEmptaskmember(task.getEmptaskmember());
		mm.setEmptaskstartdate(task.getEmptaskstartdate());
		mm.setEmptaskstarttime(task.getEmptaskstarttime());
		mm.setEmptasktitle(task.getEmptasktitle());
		
		InsertTaskDataEntity save = inserttaskrepo.save(mm);
		
		return new ResponseEntity<>(save,HttpStatus.OK);
	}
	
	
	//Getting All Data Rest-Api
	@GetMapping(value = "/getAllTask/{emptaskid}", produces = {"application/json"})
	public ResponseEntity<List<InsertTaskDataEntity>> GatAllTask(@PathVariable Integer emptaskid){
		List<InsertTaskDataEntity> findByEmptaskid = inserttaskrepo.findByEmptaskid(emptaskid);
		return new ResponseEntity<>(findByEmptaskid,HttpStatus.OK);
	}
	
	
	//Update The Task Rest Api...
	@PutMapping("/updatedata/{empid}/{testid}")
	public ResponseEntity<InsertTaskDataEntity> UpdateYourTask(@RequestBody InsertTaskData task,@PathVariable Integer empid,@PathVariable Integer testid){
		InsertTaskDataEntity mm=new InsertTaskDataEntity();
		mm.setTaskId(testid);
		mm.setEmptaskid(empid);
		mm.setEmptaskdescription(task.getEmptaskdescription());
		mm.setEmptaskenddate(task.getEmptaskenddate());
		mm.setEmptaskendtime(task.getEmptaskendtime());
		mm.setEmptasklocaton(task.getEmptasklocaton());
		mm.setEmptaskmember(task.getEmptaskmember());
		mm.setEmptaskstartdate(task.getEmptaskstartdate());
		mm.setEmptaskstarttime(task.getEmptaskstarttime());
		mm.setEmptasktitle(task.getEmptasktitle());
		
		InsertTaskDataEntity save = inserttaskrepo.save(mm);
		
		return new ResponseEntity<>(save,HttpStatus.OK);
	}
	
	//get Single Data From Db...
	@GetMapping("/GetSingleData/{empid}/{testid}")
	public ResponseEntity<InsertTaskDataEntity> GetDataById(@PathVariable Integer empid,@PathVariable Integer testid){
		InsertTaskDataEntity getSingleDataByEmpIdAndTaskId = inserttaskrepo.GetSingleDataByEmpIdAndTaskId(testid, empid);
	   return new ResponseEntity<InsertTaskDataEntity>(getSingleDataByEmpIdAndTaskId,HttpStatus.OK);
	}
	
	
	//Delete Task By Id....
	
	@DeleteMapping(value = "/delete/{empid}/{testid}")
	public ResponseEntity<String> DeleteTask(@PathVariable Integer empid,@PathVariable Integer testid){
		inserttaskrepo.DeleteByEmpIdAndTaskId(testid, empid);	
		return new ResponseEntity<String>("Your Data is Deleted",HttpStatus.OK);
	}
	
	
	// Feed-Back Url ....
	@PostMapping(value ="/feedback", consumes = {"application/json"},produces = {"text/plain"})
	 public String SubmitFeedBack(@RequestBody FeedBackForm data) {
		 FeedBackFormEntity mm=new FeedBackFormEntity();
		 mm.setUserid(data.getUserid());
		 mm.setRating(data.getRating());
		 mm.setFeedback(data.getFeedback());
		 feedback.save(mm);
		 return "your feedback is Added sucessfully";
	 }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Exception handling of a NoSuchElementException At Controller Level
	@org.springframework.web.bind.annotation.ExceptionHandler(value = NoSuchElementException.class)
	public String ExceptionHandler(NoSuchElementException tmp) {
		
		return tmp.getMessage();
	}
}
