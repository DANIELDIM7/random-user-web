import PropTypes from "prop-types";
import {
  Box,
 
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const SingleUser = ({ name, picture, location, email, phone }) => {
  //hago desesctructuración para establecer los datos que necesitaré de la base de datos de la API
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
        image={picture.large}
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
            {`${name.title} ${name.first} ${name.last}`}
          </Typography>
          <Typography variant="body2">
            <strong>País: </strong>
            {location.country}
          </Typography>
          <Typography variant="body">
            <strong>Email: </strong>
            {email}
          </Typography>

          <Typography variant="body">
            <strong>Telefono: </strong>
            {phone}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

SingleUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

SingleUser.defaultProps = {
  user: {
    name: "Mi nombre por defecro", //Se establecen valores por defecto de esta forma
    country: "País por defecto",
    email: "Email por defecto",
  },
};

export default SingleUser;
