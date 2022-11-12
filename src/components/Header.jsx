import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Link,
  styled,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../img/logo512.png";


// Estilos de la Toolbar

const ToolbarSlider = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          {/* Container ayuda a centrar el contenido del componenteen este caso de la Toolbar,maxWidth y le puedo decir el tamaño de pantalla que puede adoptar con maxWidth */}
          <ToolbarSlider>
            <IconButton edge="start">
              {/* edge es la posición que va a tener el ícono, en este caso es en el inicio */}
              <img src={Logo} alt="Logo" height="30px" />
            </IconButton>

            <Link
              underline="hover"
              component={RouterLink}
              to="/"
              href=""
              color="inherit"
            >
              Inicio
            </Link>
            {/* Así haremos que el componente Link material ui se comporte como un RouterLink de REact Dom */}

            <Link
              underline="hover"
              component={RouterLink}
              to="/Form"
              color="inherit"
            >
              Formulario
            </Link>

            <Link
              underline="hover"
              component={RouterLink}
              to="/List"
              color="inherit"
            >
              Lista
            </Link>
          </ToolbarSlider>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
