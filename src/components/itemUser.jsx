import React, { Component } from "react";

import PropTypes from "prop-types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Logo2 from '../img/logo192.png'

export class ItemUser extends Component {
  render() {
    const { name, country, email, telefono } = this.props.user;
    return (
      <Card 
       
        sx={{
          maxWidth: "50%",
          margin: "8px auto",
          borderBottom: '1px solid #000',
          display: "flex",
          alignItem: "center",
          background: '#9fa8da',
          padding:'12px',
          
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
          </Box>
        </CardContent>
      </Card>
    );
  }
}

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
