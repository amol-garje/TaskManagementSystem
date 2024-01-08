import { useEffect } from "react";
import { useParams } from "react-router-dom"

function DeleteTask(){
    let tskuf=useParams();
    useEffect(()=>{
        fetch(`http://localhost:8080/delete/${tskuf.empid}/${tskuf.taskid}`,{
            method:"DELETE",
            headers:{
              "Accept":"text/plain"
            }
        }).then(x=>{
              return x.text();
        }).then(x=>{
          console.log(x);
          document.location=`/viewtask/${tskuf.name}/${tskuf.empid}`;
        }).catch(x=>{
        })
  },[])
}


export {DeleteTask}