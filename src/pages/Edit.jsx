import React, { useState,useEffect } from "react";
import Title from "../components/Title";
import ItemUser from "../components/itemUser";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const initialState = {
    name: "",
    country: "",
    email: "",
    telefono: "",
  };
  const [user, setUser] = useState(initialState);
  
  const {id} = useParams(); //Recupero el id de los datos de la api

  // Con get data obtenemos los datos que queremos de la API, eb este caso soló el dato que queremos, el cuál viene diferenciado con su id
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      const { data } = response;
      console.log(data)
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Quiero que la función getdata se ejecute cuando se renderice para eso usamos un Hook

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Title text="Edita un usuario" />
      <ItemUser user={user} />
      <br />

      <UserForm onChange={handleChange} user={user} isEdit />
    </>
  );
};

export default Edit;
