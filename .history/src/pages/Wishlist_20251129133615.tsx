import React from 'react'
import Color from '../components/Shop-page/color'
import { useEffect } from 'react'
import  axios from 'axios';

function Wishlist() {
  const [product, Setproduct] = useState([]);
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
  return (
    <Color/>
  )
}

export default Wishlist