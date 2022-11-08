import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Form from "../pages/Form";



//  Genero un componente de clase para poder darle un estado

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      email: "",
      telefono: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="List" element={<List/>}/>
          <Route path="Form" element={<Form/>}/>

        </Routes>
        
      </Layout>
    );
  }
}

export default App;
