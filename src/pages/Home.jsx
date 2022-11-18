import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import UserList from "../components/UserList";



const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Title text="BIENVENIDO A USER RANDOM" />
     
      <UserList/>
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
