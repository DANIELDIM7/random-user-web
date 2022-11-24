import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserListView from "../view/UserList";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}3&results=10`
        ); //results=10 nos indica que queremos traer solamente 10 usuarios aleatorios (se pueden traer hasta 5000)
        const { results } = response.data; //uso desesctructuración para obtener el arreglo de results de response.data
        setUsers([...users,...results]); //se van a tener los users anteriores y le van a agregar los que se traigan de results
        console.log(results);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
      setLoading(false); // se setea cuando se obtiene respuesta
    };
    getData();
  }, [page]); //se va a seteAR LA PÁGINA CADA QUE LE DE CLIC

  const handleLoad = () => {
    setPage(page + 1);
  };

  return <UserListView users={users} loading={loading} error={error} onLoad={handleLoad} />;
};

export default UserList;
