import MainApp from "./MyMainFirstPage";
import MainuBar from "./MainuBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CssFile/Contact.css";


function datayfetch(dta,nm,id){
    // useEffect(x=>{
        fetch("http://localhost:8080/feedback",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"text/plain"
            },
            body:JSON.stringify(dta)
        }).then(x=>{
            return x.text();
        }).then(x=>{
            console.log(x);
            alert("Your feedBack is add Sucessfully");
            document.location=`/home/${nm}/${id}`;
        }).catch(x=>{
            console.log(x);
        })
    // },[])
    console.log(dta)
}



function Contact(){
        var name=useParams();
    console.log(name);



    let[contactuseridinput,Updateuseridinput]=useState("");
    let[contactFeedBack,UpdateContactFeedback]=useState("");
    let[contactratting,Updateratting]=useState("");
    let[objt,objtfu]=useState("");
    
    function UpdateUserIdContact(data){
        Updateuseridinput(data.target.value);
        console.log(data.target.value);
    }
    function UpdateUserFeedBackContact(data){
        UpdateContactFeedback(data.target.value);
        console.log(data.target.value);
    }
    function UpdateUserRattingContact(data){
        Updateratting(data.target.value);
        console.log(data.target.value);
    }

    function ContactSubmit(x){
        x.preventDefault();
        let contactsubmit={
            userid:contactuseridinput,
            feedback:contactFeedBack,
            rating:contactratting
        }
        datayfetch(contactsubmit,name.name,name.empid);
    }

   
    



    return(
           <div>

            <div>
            <MainuBar  name={name.name} id={name.empid}></MainuBar>
            </div>

            <div className="contactform">
                 <div>
                         <h2>Give FeedBack Please</h2>
                         
                         <form onSubmit={ContactSubmit}> 

                              <table>

                                     <tr>
                                         <td>UserId</td>
                                         <td><input type="number" value={contactuseridinput} onChange={UpdateUserIdContact}></input></td>
                                     </tr><br></br>
                                     <tr>
                                         <td>Ratting : </td>
                                         <td><input type="number" max="10" min="0" value={contactratting} onChange={UpdateUserRattingContact}></input></td>
                                     </tr><br></br>
                                     <tr>
                                         <td>FeedBack</td>
                                         <td><input type="text" value={contactFeedBack} onChange={UpdateUserFeedBackContact}></input></td>
                                     </tr>
                                     

                              </table>
                            <center className="contactsubbtn"> <tr>
                                <input type="submit"></input>
                              </tr></center> 

                         </form>
                        

                 </div>

            </div>
           </div>
    );
}

export default Contact;