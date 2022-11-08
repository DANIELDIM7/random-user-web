import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Link,
  styled,
} from "@mui/material";

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
              {/* Dege es la posición que va a tener el ícono, en este caso es en el inicio */}
              <img src="logo512.png" alt="Logo" height="30px" />
            </IconButton>
            <Link href="" color="inherit">
              Inicio
            </Link>
            <Link href="" color="inherit">
              Formulario
            </Link>
            <Link href="" color="inherit">
              Lista
            </Link>
          </ToolbarSlider>
        </Container>
        {/* position sticky es para que se quede en la parte de arriba */}
      </AppBar>
    </div>
  );
}

export default Header;
