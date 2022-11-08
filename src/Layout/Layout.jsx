import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' >
        {props.children}
        {/* props.children hace referencia a los componentes hijos del layout */}
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
