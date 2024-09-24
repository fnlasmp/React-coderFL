import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";
import axios from "axios";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = axios("https://www.jsonplaceholder.org/users");

    getUsers.then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  //crear un usuario

  const createUser = (newUser) => {
    //conectar con API y mandar la info
    body: JSON.stringify(newUser);
  };

  /* Con axios quedaria asi:
  const createUser = (newUser) => {
    axios.post("https://www.jsonplaceholder.org/users", newUser);
  }; */

  const deleteUser = (id) => {
    fetch(`https://www.jsonplaceholder.org/users/${id}`),
      {
        method: "DELETE",
      };
  };

  const updateUserPut = (newInfo, id) => {
    fetch(`https://www.jsonplaceholder.org/users/${id}`),
      {
        method: "PUT",
        body: JSON.stringify(newInfo), //{...oldUser, x:1, y:'Pepe'}
      };
  };

  const updateUserPatch = (newInfo, id) => {
    fetch(`https://www.jsonplaceholder.org/users/${id}`),
      {
        method: "PUT",
        body: JSON.stringify(newInfo), //{x:1, y:'Pepe'}
      };
  };

  const childProps = {
    users,
    createUser,
    deleteUser,
  };

  return <FetchingData {...childProps} />;
};

export default FetchingDataContainer;
