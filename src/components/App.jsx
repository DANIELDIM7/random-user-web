import React from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Form from "../pages/Form";
import User from "../pages/User";



//  Genero un componente de clase para poder darle un estado

const App = () => {

 
    return (
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="List" element={<List/>}/>
          <Route path="Form" element={<Form/>}/>
          <Route path="User/:id" element={<User/>}/>

        </Routes>
        
      </Layout>
    );
}


export default App;
