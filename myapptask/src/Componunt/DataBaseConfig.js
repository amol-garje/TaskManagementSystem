
// Write Here All Registrtion Data Logic.....

import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";



function LoginDataSet(){
    var data=useParams();
    console.log("Your Data In DataMainConfig Clasd",data);
    let[vrr,fu]=useState("");
     useEffect(()=>{
        fetch("http://localhost:8080/LoginValidate",{
            method:"POST",
            headers:{
             "Content-Type":"application/json",
             "Accept":"text/plain"
            },
            body:JSON.stringify(data)
        }).then(x=>{
            return x.text();
        }).then(x=>{
            console.log("Your Responce Data",x);
            let ff=x;
            fu(ff);
        })
    },[]);
    console.log("Your come data eill be",vrr);
    if("true"===vrr){
        window.location=`/mainApp/${data.name}/${data.empid}`;
   }
   return(
           <div>
            <p>Your Responce From Server Will be</p>
            <ht>{vrr}</ht>
            </div>
       );
       
   
}


export default LoginDataSet;