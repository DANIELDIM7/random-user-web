import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleUser from "./SingleUse";

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
        console.log(response);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
      setLoading(false); // se setea cuando se obtiene respuesta
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Box align="center" height="100vh">
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Box height="100%">
          {users.map((item, index) => (
            <SingleUser key={index} {...item} /> //Para que mande todos items procedentes de users.map
          ))}
        </Box>
      )}
      {error && <Typography align="center">{error}</Typography>}
      {/* Esto es para que en caso de que ocurra algún error muestre el error */}
    </>
  );
};

export default UserList;
