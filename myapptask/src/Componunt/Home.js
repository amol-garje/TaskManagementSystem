import MainApp from "./MyMainFirstPage";
import MainuBar from "./MainuBar";
import { useParams } from "react-router-dom";
import "../CssFile/Home.css";

function Home(props){
        // const { id } = useParams();
        var name=useParams();
    console.log(name);
    return(
<div>
      <div>
        <MainuBar  name={name.name} id={name.empid} ></MainuBar>
      </div>   
          
            <div className="home1">
                    <div  className="animate__animated animate__backInDown home2">
                             <h3>Welcome In A Your Daily Task Managment System.</h3>
                    </div>  
                          
                    <div  className="animate__animated animate__backInLeft animate__delay-1s home3">
                         <h1>Why Managment</h1>   
                         <p>The importance of management in an organization is multifaceted. Managers are important for any organization to achieve its goals. They are the backbone of any organization, and their role is to ensure that everything runs smoothly in the company. The success or failure of an organization depends on how well its managers handle their responsibilities.</p> 
                    </div>    

                    <div  className="animate__animated animate__backInRight animate__delay-3s home4">
                         <h1>Who To Manage</h1>   
                         <p>The importance of management in an organization is multifaceted. Managers are important for any organization to achieve its goals. They are the backbone of any organization, and their role is to ensure that everything runs smoothly in the company. The success or failure of an organization depends on how well its managers handle their responsibilities.</p> 
                    </div>    
                            

            </div>
            </div>
    );
}

export default Home;