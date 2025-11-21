import React from "react";

function Hotoffers() {
  const products = [
    {
      id: 1,
      name: "Diamond Jewelry",
      description: "Sparkling beauty that captivates",
      oldPrice: "$12,000",
      newPrice: "$5,999",
      image: "/home-pic/HO-1.png",
      tag: "New",
      buttonColor: "#9333EA",
    },
    {
      id: 2,
      name: "Gold Necklace",
      description: "Pure elegance for every moment",
      oldPrice: "$9,000",
      newPrice: "$4,500",
      image: "/home-pic/HO-2.png",
      tag: "Hot",
      buttonColor: "#EAB308",
    },
    {
      id: 3,
      name: "Silver Ring",
      description: "Timeless and modern style",
      oldPrice: "$2,500",
      newPrice: "$1,299",
      image: "/home-pic/HO-3.png",
      tag: "Sale",
      buttonColor: "#3B82F6",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold mb-10">🌵 Hot Offers</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-[380px] h-[360px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg group"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              {/* Tag */}
              <div className="self-end bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
                {product.tag}
              </div>

              {/* Content + Button */}
              <div className="text-white">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <p className="line-through text-gray-200 text-sm">{product.oldPrice}</p>
                    <p className="text-green-400 font-bold">{product.newPrice}</p>
                  </div>
                  <button
                    style={{ backgroundColor: product.buttonColor }}
                    className="w-16 h-10 flex items-center justify-center rounded-full text-white hover:opacity-80 transition-opacity duration-300 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotoffers;
