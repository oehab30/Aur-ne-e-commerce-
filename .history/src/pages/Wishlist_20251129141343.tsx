import React from 'react'
import Color from '../components/Shop-page/color'
import { useEffect ,useState } from 'react'
import { api } from '../Lib/utils/api';

function Wishlist() {
  const [product, setProduct] = useState([]);
useEffect(() => {
  api.get("/products")
    .then((res) => {
      console.log(res);
      setProduct(res.data); // store fetched products in state
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <Color/>
  )
}

export default Wishlist