import MainuBar from "./MainuBar";
import Home from "./Home";
import CreateTask from "./CreateTask";
import Contact from "./Contact";
import ViewTask from "./Viewtask";
import { Route, Routes, useParams } from "react-router-dom";
function MainApp(props) {
    var name=useParams();
    console.log(name);
  return (
    <div>
      <div>
        <MainuBar name={name.name} id={name.empid}></MainuBar>
      </div>
        <p>I am in Data </p>
    </div>
  );
}

export default MainApp;
