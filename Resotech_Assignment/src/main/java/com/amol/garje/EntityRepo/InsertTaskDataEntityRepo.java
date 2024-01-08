package com.amol.garje.EntityRepo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.amol.garje.Entity.InsertTaskDataEntity;



public interface InsertTaskDataEntityRepo extends JpaRepository<InsertTaskDataEntity, Integer>{
	public List<InsertTaskDataEntity> findByEmptaskid(Integer id);
	
	@Query("delete from InsertTaskDataEntity where taskId=:tskid and emptaskid=:empid ")
	@Modifying
	@Transactional
	public void DeleteByEmpIdAndTaskId(Integer tskid,Integer empid);
	
	@Query("from InsertTaskDataEntity where taskId=:tskid and emptaskid=:empid")
	public InsertTaskDataEntity GetSingleDataByEmpIdAndTaskId(Integer tskid,Integer empid);
	
	
	
	
	
	
	
	 
}
