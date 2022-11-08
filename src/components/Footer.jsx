import React from "react";
import { Container, Typography, Grid, Link, styled } from "@mui/material";

import { Box } from "@mui/system";

const BoxStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "24px 0",
  background: "#1565C0",
  color: "white",
}));

const Footer = () => {
  return (
    <footer>
      <BoxStyled color="primary">
        <Container maxWidth="md">
          <Grid container align="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h5">
                <strong>Politicas del sitio</strong>
              </Typography>
              <br />
              <Link href="#" color="inherit">
                <Typography>Políticas de privacidad</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography>Términos y condiciones</Typography>
              </Link>
            </Grid>
            {/* con xs se especifica el tamaño total y con sm por columnase especifica el tamaño de esos 12 que va a tomar cad grid */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h5">
                <strong>Servicios</strong>
              </Typography>
              <br />
              <Link href="#" color="inherit">
                <Typography>Soporte</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography>Preguntas frecuentes</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5">
                <strong>Contáctanos</strong>
              </Typography>
              <br />
              <Link href="#" color="inherit">
                <Typography>09999999</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography>email@prueba.com</Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </BoxStyled>
    </footer>
  );
};

export default Footer;
