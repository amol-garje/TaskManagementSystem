import MainApp from "./MyMainFirstPage";
import MainuBar from "./MainuBar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../CssFile/CreateTask.css"
import {InsertTaskIntoTheDb} from "./InsertTaskHandler";
function CreateTask(){
        var name=useParams();
    console.log(name);


    let[taskempid,empisupdate]=useState(name.empid);
    let[titleoftask,titleupdt]=useState("");
    let[startdate,startdateupdate]=useState("");
    let[endtime,endtimeupdate]=useState("");
    let[starttime,starttimeupdate]=useState("");
    let[memberoftask,updatememberoftask]=useState("");
    let[enddate,enddateupdate]=useState("");
    let[taskdescription,taskdescriptionupdate]=useState("");
    let[tasklocation,tasklocationupdate]=useState("");



    function UpdateTitleofEmploy(data){
        titleupdt(data.target.value);
        console.log(data.target.value);
    }
    function UpdateStartDate(data){
        startdateupdate(data.target.value);
        console.log(data.target.value);
    }
    function UpdateEndDate(data){
        enddateupdate(data.target.value);
        console.log(data.target.value);
    }
    function UpdateStartTime(data){
        starttimeupdate(data.target.value);
        console.log(data.target.value);
    }
    function UpdateEndTime(data){
        endtimeupdate(data.target.value);
        console.log(data.target.value);
    }
    function Updatememberoftask(data){
        updatememberoftask(data.target.value);
        console.log(data.target.value);
    }
    function Updatetaskdescription(data){
        taskdescriptionupdate(data.target.value);
        console.log(data.target.value);
    }

    function Updatetasklocation(data){
        tasklocationupdate(data.target.value);
        console.log(data.target.value);
    }

    function SubmiitedTask(x){
        x.preventDefault();
        let taskobject={
            emptaskid:taskempid,
            emptasktitle:titleoftask,
            emptaskstartdate:startdate,
            emptaskenddate:enddate,
            emptasklocaton:tasklocation,
            emptaskstarttime:starttime,
            emptaskendtime:endtime,
            emptaskmember:memberoftask,
            emptaskdescription:taskdescription,
        }
        console.log(taskobject);
        InsertTaskIntoTheDb(taskobject,name.name,name.empid);
    }


    return(
           <div>

            <div>
            <MainuBar name={name.name} id={name.empid}></MainuBar>
            </div>

            <div className="creattsk1">
                  <div>
                    <center>
                      <h3> Please Entre your Todays Task  </h3>
                      </center>
                  </div>   
                  <div>
                         <form onSubmit={SubmiitedTask}>

                         <table>
                             <tr>
                                <td>Title Of A Task</td>
                                <td><input type="text" value={titleoftask} onChange={UpdateTitleofEmploy} required></input></td>
                                <td>Start-Date</td>
                                <td><input type="date" value={startdate} onChange={UpdateStartDate} required></input></td>
                             </tr>
                             <tr>
                                <td>End-Date</td>
                                <td><input type="date" value={enddate} onChange={UpdateEndDate} required></input></td>
                                <td>Start-Time</td>
                                <td><input type="time" value={starttime} onChange={UpdateStartTime} required></input></td>
                             </tr>
                             <tr>
                                <td>End-Time</td>
                                <td><input type="time" value={endtime} onChange={UpdateEndTime} required></input></td>
                                <td>Location</td>
                                <td><input type="text" value={tasklocation} onChange={Updatetasklocation} required></input></td>
                             </tr>
                             <tr>
                                <td>Member-In-Task</td>
                                <td><input type="number" value={memberoftask} onChange={Updatememberoftask} required></input></td>
                                <td>Discription-Of-A-Task</td>
                                <td><textarea rows="7" cols="30" value={taskdescription} onChange={Updatetaskdescription} required></textarea></td>
                             </tr>

                              </table>
                              <center>  <tr>
                                    <input id="tsksub" type="submit"></input>
                                </tr></center>
                         </form>
                  </div>
            </div>
           </div>
    );
}

export default CreateTask;