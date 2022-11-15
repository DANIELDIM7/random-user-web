import React, { useEffect, useState } from "react";
// import userList from "../components/data";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";
import axios from "axios";

const List = () => {
  const [users, setUsers] = useState([]);

  const getData = async ()=>{
    try {
      const response = await axios.get('http://localhost:3000/data') 
      const {users} = response.data
      console.log(response)
      console.log(users)
      setUsers(users)

    }catch (error){
      console.log(error)
    }
  }

  // Quiero que la función getdata se ejecute cuando se renderice para eso usamos un Hook

  useEffect(() =>{
    getData()
  },[])



  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} />
      ))}
    </>
  );
};

export default List;
