import React, { useState } from "react";
import userList from "../components/data";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";

const List = () => {
  const [users, setUsers] = useState(userList);

  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} />
      ))}
    </>
  );
};

export default List;
