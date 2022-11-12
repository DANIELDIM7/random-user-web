import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React from "react";

import "./styles/UserForm.css";

const UserForm = (props) => {
  const { name, country, email } = props.user;
  return (
    <div>
      <form className="form">
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
      </form>
    </div>
  );
};

export default UserForm;
