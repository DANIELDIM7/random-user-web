 import React, { useEffect, useState } from "react";
// import userList from "../components/data";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";
import axios from "axios";

const List = () => {
  const [users, setUsers] = useState([]);

  // json-server --watch db.json para ejecutar el servidor fake

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response);
      const { data } = response;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Quiero que la función getdata se ejecute cuando se renderice para eso usamos un Hook

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} isEdit isDelete/>//isEdit es para que solo aparezca en lista de usuarios 
      ))}
    </>
  );
};

export default List;
