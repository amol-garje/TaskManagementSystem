import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import "../CssFile/RegistrationDisplay.css";
function Display(){
    var data=useParams();
    console.log("Registration Data In Display",data);
    var[datar11,refu]=useState("");
    let datar1;
    useEffect(()=>{
        fetch("http://localhost:8080/GetData",{
            method:"POST",
            headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
            },
            body:JSON.stringify(data)
        }).then(x=>{
            return x.json();
        }).then(x=>{
             console.log(x);
             console.log(x);
             datar1={
                 urid:x.id,
                 urname:x.name,
                 uremail:x.email,
                 urpassword:x.password,
                 urgender:x.gender,
                 urcountry:x.country

              }
              refu(datar1);
        })
    },[]);


    return(
        <div className="regd1">

        
              {
                alert("Register Succesfully..")
              }
              <div  className="regd2">
             <table border="1" >
                <tr>
                    <td>Id:</td>
                    <td>{datar11.urid}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{datar11.urname}</td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>{datar11.urpassword}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{datar11.uremail}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{datar11.urgender}</td>
                  </tr>
                  <tr>
                    <td>Place:</td>
                    <td>{datar11.urcountry}</td>
                  </tr>
                  

             </table>
             <div className="tp2">
             <Link to="/login">Login</Link>
             </div>
             </div>
                
        </div>
    )
}

export default Display;