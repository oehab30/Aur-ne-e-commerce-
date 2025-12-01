import React from 'react'
import { useEffect, useState } from "react";

function API() {

function UsersList() {
  const [users, setUsers] = useState([]);

useEffect(() => {
    Axis3DIcon.get(import.m)
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