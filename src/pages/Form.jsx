import React, { Component } from "react";
import Title from "../components/Title";
import ItemUser from "../components/itemUser";
import UserForm from "../components/UserForm";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      email: "",
      telefono: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <Title text="Ingresa tu propio usuario" />
        <ItemUser user={this.state} />
        <br />

        <UserForm onChange={this.handleChange} user={this.state} />
      </>
    );
  }
}

export default Form;
