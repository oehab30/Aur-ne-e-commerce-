import React from 'react'
import heroImage from "../../../public/home-pic/summer-collection.jpg";

function Summercollection() {
  return (
    <>
 <div
      className="flex-col text-center  mt-20"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
              <div className="absolute inset-0 bg-black/35">
              </div>

        <h1 className='font-bold text-3xl text-white mb-6'>Summer Collection</h1>
        <p className='text-xl text-white'>20% Off All Items</p>
        <button>Shop Collection</button>
    </div>

    </>
  )
}

export default Summercollection