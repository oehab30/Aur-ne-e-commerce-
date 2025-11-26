import React from 'react'
import heroImage from "../../../public/home-pic/hero3.jpg";

function Summercollection() {
  return (
    <>
 <div
      className="flex-col items-center "
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <h1 cla>Summer Collection</h1>
        <p>20% Off All Items</p>
        <button>Shop Collection</button>
    </div>

    </>
  )
}

export default Summercollection