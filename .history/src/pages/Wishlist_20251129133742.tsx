import React from 'react'
import Color from '../components/Shop-page/color'
import { useEffect } from 'react'
import  axios from 'axios';

function Wishlist() {
  const [product, Setproduct] = useState([]);

  useEffect(() => {
axios.get(import.meta.env.VITE_BASE_URL + "/products").then(res) => {
  console.log(res.data);
  Setproduct(res.data);
}
  }, []);
  return (
    <Color/>
  )
}

export default Wishlist