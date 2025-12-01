import React from 'react'
import Color from '../components/Shop-page/color'
import { useEffect } from 'react'
import  axios from 'axios';

function Wishlist() {
const [product, setProduct] = useState([]);

useEffect(() => {
  axios
    .get(import.meta.env.VITE_BASE_URL + "/products")
    .then((res) => {
      console.log(res);
      setProduct(res.data); // store fetched products in state
    })
    .catch((err) => {
      console.error(err);
    });
}, []);
  return (
    <Color/>
  )
}

export default Wishlist