import React from 'react'
import Color from '../components/Shop-page/color'
import axios from 'axios'
import { useEffect ,useState } from 'react'

function Wishlist() {
  const [product, setProduct] = useState([]);
useEffect(() => {
axios.get(import.meta.env.VITE_BASE_URL + "/products")
  .then((res) => {
    console.log(res.data);
    setProduct(res.data);
  })
  .catch((err) => console.error(err));
  return (
    <Color/>
  )
}

export default Wishlist