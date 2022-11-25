import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";

import React from "react";
import Modal from "../Modal";

import SingleUser from "../SingleUse";

const UserList = ({ onLoad,users, loading, error,onFilter }) => {
  return (
    <>
    <TextField label='Buscar' onChange={onFilter}/> 
    {/* TextField Aañade una casilla para buscador */}
      {users.length === 0 ? (
        <Box align="center" height="100vh">
          <Typography variant="H3">No se encontraron datos</Typography> 
          {/* En caso de que no se encuentren datos se muestra ese mensaje */}
        </Box>
      ) : (
        <Box height="100%">
          {users.map((item, index) => (
            <SingleUser key={index} {...item} /> //Para que mande todos items procedentes de users.map
          ))}

          <Box align='center'>
            <Button variant="contained" color="secondary" onClick={onLoad}>
              Cargas más
            </Button>
          </Box>
        </Box>
      )}
      {error && <Typography align="center">{error}</Typography>}
      {/* Esto es para que en caso de que ocurra algún error muestre el error */}
      {loading && (
        <Modal>
          <CircularProgress color="primary" />
          {/* Para que se ejecute el Modal con el circularprogress, severá una pantalla oscura transparente al recargar la página haciendo el efecto de estar cargando */}
        </Modal>
      )}
    </>
  );
};

export default UserList;
