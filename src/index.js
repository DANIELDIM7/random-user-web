import React from "react";
import ReactDOM from "react-dom";
import ItemUser from "./components/itemUser";
import Title from "./components/Title";
import './components/global.css'
import App from "./components/App";
import {BrowserRouter} from 'react-router-dom'




const container = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  
  ,
  container
);
