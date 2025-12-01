import React from 'react'
import { useEffect, useState } from "react";

function API() {

function UsersList() {
  const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/users").then(res => setUsers(res.data));
  }, []); // run once on mount

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


export default API