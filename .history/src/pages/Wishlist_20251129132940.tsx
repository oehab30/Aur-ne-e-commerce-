import React, { useEffect, useState } from "react";
import axios from "axios";



function Wishlist() {
  const [users, setUsers] = useState<User[]>([]); // state typed as array of User

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(import.meta.env.VITE_BASE_URL + "/users");
        setUsers(res.data); // TypeScript knows res.data is User[]
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []); // run once on mount

  return (
    <div>
      <h1>Wishlist Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
