import RegistrationForm from "./RegistrationForm.js";
import LoginPage from "../Componunt/LoginPage.js";
import { Route, Routes } from "react-router-dom";
import LoginDataSet from "../Componunt/DataBaseConfig.js";
import MainApp from "./MyMainFirstPage.js";
import Home from "./Home";
import CreateTask from "./CreateTask";
import Contact from "./Contact";
import ViewTask from "./Viewtask";
import Display from "./RegistrationDisplay.js";
import { useState } from "react";
import { UpdateTask,DeleteTask } from "./APITask.js";
import UpdateDataTask from "./UpdateTaskData.js";

function App() {

  
  function LoginDtaFetch(logind) {
      console.log("Your Data In App Login Method",logind);
       window.location=`/loginvalidate/${logind.lname}/${logind.lempid}/${logind.lpassword}`;
  }

  function RegistrationDataFetch(registerd) {
    console.log("In App Regiter Data ",registerd);
    window.location=`/display/${registerd.rnm}/${registerd.rgm}/${registerd.rps}/${registerd.rge}/${registerd.rcn}`;
  }

  return (
    <div>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RegistrationForm
              DataFetchMethos={RegistrationDataFetch}
            ></RegistrationForm>
          }
        ></Route>
        <Route
          path="/login"
          element={<LoginPage logindata={LoginDtaFetch}></LoginPage>}
        ></Route>
        <Route
          path="/mainApp/:name/:empid"
          element={<MainApp></MainApp>}
        ></Route>

        <Route path="/home/:name/:empid" element={<Home></Home>}></Route>
        <Route path="/createtask/:name/:empid" element={<CreateTask></CreateTask>}></Route>
        <Route path="/viewtask/:name/:empid" element={<ViewTask></ViewTask>}></Route>
        <Route path="/contact/:name/:empid" element={<Contact></Contact>}> </Route>

        <Route path="/display/:name/:email/:password/:gender/:country" element={<Display></Display>}></Route>
        <Route path="/loginvalidate/:name/:empid/:password" element={<LoginDataSet></LoginDataSet>}></Route>
        <Route path="/updatetask/:name/:empid/:taskid" element={<UpdateDataTask></UpdateDataTask>}></Route>
        <Route path="/deletetask/:name/:empid/:taskid" element={<DeleteTask></DeleteTask>}></Route>

        
      </Routes>
    </div>
    </div>
  );
}
export default App;
