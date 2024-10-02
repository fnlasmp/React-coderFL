import React from "react";

const FetchingData = ({ users, createUser, deleteUser }) => {
  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.firstname}</h2>;
      })}
      <button onClick={() => createUser({ name: "Pepe" })}>
        Crear usuario
      </button>
    </div>
  );
};

export default FetchingData;
