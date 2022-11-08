import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

import React, { Component } from "react";
import "./styles/UserForm.css";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = (e) => {
    // Evito que se recargue la página
    e.preventDefault();
    this.props.onChange(this.state);
  };

  render() {
    const { name, country, email } = this.props.user;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <FormControl fullWidth>
              <InputLabel>Nombre:</InputLabel>
              <Input
                type="text"
                name="name"
                onChange={this.props.onChange}
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
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
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
  }
}

export default UserForm;
