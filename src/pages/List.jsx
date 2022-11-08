import React, { Component } from "react";
import userList from "../components/data";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userList,
    };
  }
  render() {
    return (
      <>
        <Title text="Lista de usuarios" />
        {this.state.users.map((item, index) => (
          <ItemUser key={index} user={item} />
        ))}
      </>
    );
  }
}
export default List;


