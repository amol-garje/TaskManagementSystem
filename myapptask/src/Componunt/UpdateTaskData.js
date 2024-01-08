import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateAmolGarje } from "./InsertTaskHandler";
import "../CssFile/UpdateTaskData.css";
function UpdateDataTask(){
    let rsd=useParams();
    console.log("I am in UpdateDataTask",rsd);
    let[updt1,updtfu1]=useState({});
     useEffect(()=>{
          fetch(`http://localhost:8080/GetSingleData/${rsd.empid}/${rsd.taskid}`,{
               method:"GET",
               headers:{
                  "Accept":"application/json"
               }
          }).then(x=>{
              return x.json();
          }).then(x=>{
               console.log(x);  
               let ssop={
                    EI:x.emptaskid,
                    TT:x.emptasktitle,
                    TD:x.emptaskdescription,
                    TED:x.emptaskenddate,
                    TET:x.emptaskendtime,
                    TLO:x.emptasklocaton,
                    TMC:x.emptaskmember,
                    TSD:x.emptaskstartdate,
                    TST:x.emptaskstarttime,
                    TaskId:x.taskId
               }            
               updtfu1(ssop);   
               console.log(updt1)
          }).catch(x=>{
               console.log(x);
          })
     },[]);

     let[EI1,EIF1]=useState(updt1.EI);
     let[TT1,TTF1]=useState(updt1.TT);
     let[TD1,TDF1]=useState(updt1.TD);
     let[TED1,TEDF1]=useState(updt1.TED);
     let[TET1,TETF1]=useState(updt1.TET);

     let[TLO1,TLOF1]=useState(updt1.TLO);
     let[TMC1,TMCF1]=useState(updt1.TMC);
     let[TSD1,TSDF1]=useState(updt1.TSD);
     let[TST1,TSTF1]=useState(updt1.TST);
     let[TaskId1,TaskIdf1]=useState(updt1.TaskId);

     
     function TaskTUp(x){
          TTF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTDUp(x){
          TDF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTEDUp(x){
          TEDF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTETUp(x){
          TETF1(x.target.value)
          console.log(x.target.value);
     }
     function TaskTLOUp(x){
          TLOF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTMCUp(x){
          TMCF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTSDUp(x){
          TSDF1(x.target.value);
          console.log(x.target.value);
     }
     function TaskTSTUp(x){
          TSTF1(x.target.value);
          console.log(x.target.value);
     }

    function SUBTD(x){
     x.preventDefault();
     let erq={
          emptasktitle:TT1,
          emptaskstartdate:TSD1,
          emptaskenddate:TED1,
          emptasklocaton:TLO1,
          emptaskstarttime:TST1,
          emptaskendtime:TET1,
          emptaskmember:TMC1,
          emptaskdescription:TD1
      }
      console.log("I am a Submit Objecrt",erq);
      UpdateAmolGarje(erq,rsd.name,rsd.empid,rsd.taskid);
    }
 
 return(
   <div className="animate__animated animate__backInUp updtf1">
         <div>

         <center><p>Update The Task</p></center>
     <form onSubmit={SUBTD}>

     <table>
         <tr>
           <td>Title Of A Task</td> 
            <td><input type="text" value={TT1} onChange={TaskTUp} required></input></td>
            <td>Start-Date</td>
            <td><input type="date" value={TSD1} onChange={TaskTSDUp} required></input></td>
         </tr>
         <tr>
            <td>End-Date</td>
            <td><input type="date" value={TED1} onChange={TaskTEDUp} required></input></td>
            <td>Start-Time</td>
            <td><input type="time" value={TST1} onChange={TaskTSTUp} required></input></td>
         </tr>
         <tr>
            <td>End-Time</td>
            <td><input type="time" value={TET1} onChange={TaskTETUp} required></input></td>
            <td>Location</td>
            <td><input type="text" value={TLO1} onChange={TaskTLOUp} required></input></td>
         </tr>
         <tr>
            <td>Member-In-Task</td>
            <td><input type="number" value={TMC1} onChange={TaskTMCUp} required></input></td>
            <td>Discription-Of-A-Task</td>
            <td><textarea rows="7" cols="30" value={TD1} onChange={TaskTDUp} required></textarea></td>
         </tr>
          </table>
          <center>  <tr>
                <input id="tsksub" type="submit"></input>
            </tr></center>
     </form>
     </div>
   </div>
 );
     

























      
}
export default UpdateDataTask;