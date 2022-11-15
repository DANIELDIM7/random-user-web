import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";
import "./styles/UserForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// en la nueva version useHistory cambia a useNavigate


const UserForm = (props) => {
  const { name, country, email } = props.user;
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    // Deber ser async porque se va a usar promesas
    e.preventDefault(); //para evitar que se refresque la página
    console.log(props.user);
    try {
      await axios.post("http://localhost:3000/users", props.user);
      // props.user especifa el objeto al cual llegarán los dtos en el servidor
      navigate('/List') // Para que cada que envíe un dato me dirija a la página de la lista
    } catch (error) {console.log(error)};
  };




  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <FormControl fullWidth>
            <InputLabel>Nombre:</InputLabel>
            <Input
              type="text"
              name="name"
              onChange={props.onChange}
              value={name}
            ></Input>
            <FormHelperText>Aquí debes ingresar tu nombre</FormHelperText>
          </FormControl>
        </div>
        <br />

        <FormControl fullWidth>
          <InputLabel>País:</InputLabel>
          <Input
            type="text"
            name="country"
            onChange={props.onChange}
            value={country}
            label="name"
          ></Input>
          <FormHelperText>Aquí debes el pais</FormHelperText>
        </FormControl>

        <br />

        <FormControl fullWidth variant="filled">
          <InputLabel>Correo Electronico:</InputLabel>
          <Input
            type="text"
            name="email"
            onChange={props.onChange}
            value={email}
            // label='name'
          ></Input>
          <FormHelperText>
            Aquí debes ingresarel correo electrónico
          </FormHelperText>
        </FormControl>
        <Box align="center">
          <Button type="submit" color="primary" variant="contained">
            Crear
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
