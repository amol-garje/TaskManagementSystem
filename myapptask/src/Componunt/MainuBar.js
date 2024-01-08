import Logo from "../logo.png"
import "../CssFile/MainuBar.css";
import { Link } from "react-router-dom";
function MainuBar(props){
    return(
        <div className="mb1">
                 <div className="mb2">
                     <dl className="mb3">
                        <dt><img src={Logo}></img></dt>
                        <Link className="a1" to={`/home/${props.name}/${props.id}`}>Home</Link>
                        <dt><Link className="a1"  to={`/createtask/${props.name}/${props.id}`}>CreateTask</Link></dt>
                    <dt><Link className="a1"  to={`/viewtask/${props.name}/${props.id}`} >ViewTask</Link></dt> 
                        <dt><Link className="a1" to={`/contact/${props.name}/${props.id}`}>Contact</Link></dt>
                        <dt ><label>Welcome</label><label> {props.name}</label></dt>
                     </dl>
                 </div>
                
        </div>
    );
}

export default MainuBar;