import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "/users");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchUsers();
}, []);
function Wishlist() {
  return (
    
  )
}

export default Wishlist