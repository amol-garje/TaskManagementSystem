import ReactDom from 'react-dom'
import App from "../src/Componunt/App.js"
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"));