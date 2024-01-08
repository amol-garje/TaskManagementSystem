import { useParams } from "react-router-dom";

function RegistrationHandle(props){

        var data=useParams();
        console.log(data.name);

       return(
        <div>
               
               <p>I am in Your Class</p>
               </div>
       );
}
export default RegistrationHandle;