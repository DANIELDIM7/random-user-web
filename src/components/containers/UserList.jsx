import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserListView from "../view/UserList";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        ); //results=10 nos indica que queremos traer solamente 10 usuarios aleatorios (se pueden traer hasta 5000)
        const { results } = response.data; //uso desesctructuración para obtener el arreglo de results de response.data
        setUsers(results);
        console.log(results);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
      setLoading(false); // se setea cuando se obtiene respuesta
    };
    getData();
  }, []);

  return <UserListView users={users} loading={loading} error={error} />;
};

export default UserList;
