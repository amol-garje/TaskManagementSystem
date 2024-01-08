import MainApp from "./MyMainFirstPage";
import MainuBar from "./MainuBar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CssFile/Viewtask.css";
function ViewTask() {
  var name = useParams();
  let [alldataf, alldatafmethod] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getAllTask/${name.empid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        let ary = [...x];
        alldatafmethod(ary);
      })
      .catch((x) => {
        console.log(x);
      });
  }, []);
  console.log(alldataf);
  return (
    <div>
      <div>
        <MainuBar name={name.name} id={name.empid}></MainuBar>
      </div>

      <div>

      <div>
        <center>
          <h2>View Your Task</h2>
          </center>
          </div>
        <div className="viewtable1">
          <div>
          <table border="1" className="tbltskview">
            <tr>
              <th>YourId</th>
              <th>Task Title</th>
              <th>TaskStart Date</th> 
              <th>TaskEnd Date</th>
              <th>TaskStart Time</th>
              <th>TaskEnd Time</th>
              <th>MemberInTsak</th>
              <th>Title description</th>
              <th>Task locaton</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
            {alldataf.map((x) => (
              <tr>
                <td className="tda
                ">{x.taskId}</td>
                <td className="tda
                ">{x.emptasktitle}</td>
                <td className="tda
                ">{x.emptaskstartdate}</td>
                <td className="tda
                ">{x.emptaskenddate}</td>
                <td className="tda
                ">{x.emptaskstarttime}</td>
                <td className="tda
                ">{x.emptaskendtime}</td>
                <td className="tda
                ">{x.emptaskmember}</td>
                <td className="tda
                ">{x.emptasklocaton}</td>
                <td className="tda
                ">{x.emptaskdescription}</td>
                <td className="tda
                "><Link to={`/updatetask/${name.name}/${x.emptaskid}/${x.taskId}`}>UPDATE</Link></td>
                <td className="tda
                "><Link to={`/deletetask/${name.name}/${x.emptaskid}/${x.taskId}`}>DELETE</Link></td>
              </tr>
            ))
            }
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
