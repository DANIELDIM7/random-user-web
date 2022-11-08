import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";

const data = {
  name: "Daniel Cuellar",
  country: "Colombia",
  email: "pruebaqprueba.con",
  telefono: "0999999",
};

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "70vh",
      }}
    >
      <Title text="BIENVENIDO A USER RANDOM" />
      <ItemUser user={data} />
      <Typography variant="body2" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
        ipsam ratione laudantium iste provident! Vel, harum totam. Culpa
        dignissimos provident nemo id nostrum aliquam, maiores accusantium
        cumque unde veniam!
      </Typography>
    </Box>
  );
};

export default Home;
