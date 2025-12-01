import React, { useEffect, useState } from 'react';
import Color from '../components/Shop-page/color';
import axios from 'axios';

function Wishlist() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Wishlist</h1>
      <Color />
    
    </div>
  );
}

export default Wishlist;
