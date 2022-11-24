import { Box, Button, CircularProgress, Typography } from "@mui/material";

import React from "react";
import Modal from "../Modal";

import SingleUser from "../SingleUse";

const UserList = ({ onLoad,users, loading, error }) => {
  return (
    <>
      {loading ? (
        <Box align="center" height="100vh"></Box>
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
