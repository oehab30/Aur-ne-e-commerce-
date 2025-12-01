import React from 'react'
import  HeroSection from '../components/home-page/Hero'
import Hotoffers from '../components/home-page/Hotoffers'
import DontMiss from '../components/home-page/Dontmiss'
import Featuredcollection from '../components/home-page/Featuredcollection'
import BestSellers from '../components/home-page/BestSellers'
import Summercollection from '../components/home-page/Summercollection'
import { useEffect } from 'react'
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

function Error() {
  return (
<>



<HeroSection/>
<Hotoffers/>
<DontMiss/>
<Featuredcollection/>
<BestSellers/>
<Summercollection/>
 </>
     )
}
export default Error