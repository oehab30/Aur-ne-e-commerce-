import React from 'react'
import Color from '../components/Shop-page/color'
import { useEffect } from 'react'
import  axios from 'axios';

function Wishlist() {
  const [product, Setproduct] = useState([]);

  useEffect(() => {


    fetchUsers();
  }, []);
  return (
    <Color/>
  )
}

export default Wishlist