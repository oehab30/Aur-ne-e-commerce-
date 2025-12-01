import React from 'react'
import { useEffect, useState } from "react";

function API() {

function UsersList() {
  const [users, setUsers] = useState([]);

use

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


export default API