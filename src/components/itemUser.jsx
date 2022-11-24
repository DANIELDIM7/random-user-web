import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Paper,
} from "@mui/material";
import Logo2 from "../img/logo192.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ItemUser = (props) => {
  const { name, country, email, telefono, id } = props.user;
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      window.location.reload(); //Con esto hago que una vez se elimine el componente, la página se actualice automáticamente (Sino hay que estar recargando)
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setOpen(true);
  };
  return (
    <Card
      sx={{
        maxWidth: "50%",
        margin: "8px auto",
        borderBottom: "1px solid #000",
        display: "flex",
        alignItem: "center",
        background: "#9fa8da",
        padding: "12px",
      }}
    >
      <CardMedia
        component="img"
        image={Logo2}
        title="Imagen de usuario"
        sx={{
          flex: "0",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="body">
            <strong>Nombre: </strong>
            {name}
          </Typography>
          <Typography variant="body2">
            <strong>País: </strong>
            {country}
          </Typography>
          <Typography variant="body">
            <strong>Email: </strong>
            {email}
          </Typography>

          {telefono && (
            <Typography variant="body">
              <strong>Telefono: </strong>
              {telefono}
            </Typography>
          )}
          <br />

          <Box>
            {props.isEdit && (
              <Button
                component={Link}
                to={`/Edit/${id}`}
                variant="contained"
                color="secondary"
              >
                Editar
              </Button>
            )}

            {props.isDelete && (
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                color="secondary"
                onClick={handleModal}
              >
                Eliminar
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
      <Modal
        open={open}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Con open de Modal controlamos si se muestra o no el componente */}
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "20%",
            width: "30%",
          }}
        >
          <Typography>¡Está seguro de eliminar este usuario?</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Aceptar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Card>
  );
};

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

ItemUser.defaultProps = {
  user: {
    name: "Mi nombre por defecro", //Se establecen valores por defecto de esta forma
    country: "País por defecto",
    email: "Email por defecto",
  },
};

export default ItemUser;
