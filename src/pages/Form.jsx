import React, { useState } from "react";
import Title from "../components/Title";
import ItemUser from "../components/itemUser";
import UserForm from "../components/UserForm";

const Form = () => {
  const initialState = {
    name: "",
    country: "",
    email: "",
    telefono: "",
  };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Title text="Ingresa tu propio usuario" />
      <ItemUser user={user} />
      <br />

      <UserForm onChange={handleChange} user={user} />
    </>
  );
};

export default Form;
