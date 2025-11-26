import React from 'react'

function Summercollection() {
  return (
    <>
 <div
      className="relative w-full h-[87vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <h1>Summer Collection</h1>
        <p>20% Off All Items</p>
        <button>Shop Collection</button>
    </div>

    </>
  )
}

export default Summercollection