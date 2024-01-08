import "../CssFile/LoginPage.css"
import { Link } from "react-router-dom";
import { useState } from "react";
function LoginPage(props){

    let [luname, Lnamefunction] = useState("");
    let [lupassword, Lpasswordfunction] = useState("");
    let [luemployId, Lemployfunction] = useState("");
  
    function NameDataUpdate(x){
          Lnamefunction(x.target.value);
    }
    function PasswordDataUpdate(x){
          Lpasswordfunction(x.target.value);
    }
    function EmployeDataUpdate(x){
         Lemployfunction(x.target.value);
    }
  
    function DataSavefunction(x){
            x.preventDefault();
            let ludata={
                lempid:luemployId,
                lname:luname,
                lpassword:lupassword
            }
            console.log("Your Data In LoginPage okk",ludata);
            props.logindata(ludata);
    }

         return(
            <div className="laginfirst">

               <fieldset className="fieldset">
                <legend>Login Here </legend>
                <form onSubmit={DataSavefunction}>

                      <table>
                            <tr className="tr">
                                <td>Empid :</td>
                                <td><input type="text" value={luemployId} placeholder="Entre your Employ Id :" onChange={EmployeDataUpdate} required></input></td>
                            </tr><br></br>
                            <tr className="tr">
                                <td>Name :</td>
                                <td><input type="text" value={luname} placeholder="Entre your Name :" required onChange={NameDataUpdate}></input></td>
                            </tr><br></br>
                            <tr className="tr">
                                <td>Password :</td>
                                <td><input type="text" value={lupassword}placeholder="Entre your Password :" onChange={PasswordDataUpdate} required></input></td>
                            </tr><br></br>
                      </table>
                      <tr>
                                <td><input id="sub" type="submit" ></input></td>
                      </tr>

                </form>
                <tr className="reglgi">
          <td ><Link to="/">Back</Link></td>

           </tr>
                </fieldset>
            </div>
         )
}

export default LoginPage;