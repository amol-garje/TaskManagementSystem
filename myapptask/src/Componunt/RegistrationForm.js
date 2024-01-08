import { useState } from "react";
import "../CssFile/RegistrationForm.css";
import { Link } from "react-router-dom";

function RegistrationForm(props) {
  let [rname, Namefunction] = useState("");
  let [remail, Emailfunction] = useState("");
  let [rpassword, Passwordfunction] = useState("");
  let [rgender, Senderfunction] = useState("");
  let [rcountry, Countryfunction] = useState("");

  function ChangeName(x) {
    Namefunction(x.target.value);
    console.log(x.target.value);
  }
  function ChangeEmail(x) {
    Emailfunction(x.target.value);
    console.log(x.target.value);
  }
  function ChangePassword(x) {
    Passwordfunction(x.target.value);
    console.log(x.target.value);
  }
  function ChangeGender(x) {
    Senderfunction(x.target.value);
    console.log(x.target.value);
  }
  function ChangeCountry(x) {
    Countryfunction(x.target.value);
    console.log(x.target.value);
  }

  function SubmitData(s){
        s.preventDefault();
        let RegisterData={
              rnm:rname,
              rgm:remail,
              rps:rpassword,
              rge:rgender,
              rcn:rcountry
        }
        console.log("Your Object Created Data In Form ",RegisterData);
       props.DataFetchMethos(RegisterData);
       console.log("After App Come Data",rname);
  }


  return (
    <div className="registerfirst">
      <fieldset className="regifieldset">
        <legend>Register Here </legend>
        <form onSubmit={SubmitData}>
          <table>
            <tr>
              <td>Name :</td>
              <td>
                <input
                  type="text"
                  placeholder="Entre your Name :"
                  value={rname}
                  onChange={ChangeName}
                  required
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Email :</td>
              <td>
                <input
                  type="email"
                  placeholder="Entre your Mail Id :"
                  required
                  onChange={ChangeEmail}
                  value={remail}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Password :</td>
              <td>
                <input
                  type="password"
                  placeholder="Entre your Password :"
                  value={rpassword}
                  onChange={ChangePassword}
                  required
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Gender :</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={ChangeGender}
                ></input>
                <label>Male</label>
                <input type="radio" name="gender" value="female" onChange={ChangeGender}></input>
                <label>FeMale</label>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Country :</td>
              <td>
                <select onChange={ChangeCountry}>
                  <option></option>
                  <option value="india">India</option>
                  <option value="Russia">Russia</option>
                  <option value="USA">USA</option>
                  <option value="Japan">Japan</option>
                </select>
              </td>
            </tr>
            <br></br>
          </table>
          <tr>
            <td>
              <input id="regsub" type="submit"></input>
            </td>
          </tr>
        </form>
        
        <tr className="lgi">
          <td ><Link to="/login">Login</Link></td>
          <td ><Link to="/login">AdminLogin</Link></td>
        </tr>
      </fieldset>

       
    </div>
  );
}

export default RegistrationForm;
