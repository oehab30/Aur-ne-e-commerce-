import React from "react";

function Hotoffers() {
  const products = [
    {
      id: 1,
      name: "Diamond Jewelry",
      description: "Sparkling beauty that captivates",
      oldPrice: "$12,000",
      newPrice: "$5,999",
      image: "../../../public/home-pic/HO-1.png",
      tag: "New",
      buttonColor: "#9333EA", // 💜 purple
    },
    {
      id: 2,
      name: "Gold Necklace",
      description: "Pure elegance for every moment",
      oldPrice: "$9,000",
      newPrice: "$4,500",
      image: "../../../public/home-pic/HO-2.png",
      tag: "Hot",
      buttonColor: "#EAB308", // 💛 gold/yellow
    },
    {
      id: 3,
      name: "Silver Ring",
      description: "Timeless and modern style",
      oldPrice: "$2,500",
      newPrice: "$1,299",
      image: "../../../public/home-pic/HO-3.png",
      tag: "Sale",
      buttonColor: "#3B82F6", // 💙 blue
    },
  ];

  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}>

      </motion.div>

      <h1 className="text-center text-4xl font-bold mt-10 mb-10">🌵 Hot Offers</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[380px] h-[360px] relative rounded-2xl overflow-hidden
                       border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 p-4"
          >
            {/* 🖼 Image */}
            <div className="h-48 w-full overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* 🏷 Tag */}
            <div className="absolute top-3 right-3 z-10 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
              {product.tag}
            </div>

            {/* 📜 Content */}
            <div className="p-3 mt-2">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mb-2 text-sm">{product.description}</p>

              {/* 💰 Prices + Add button */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
                  <p className="text-xl font-bold text-green-600">{product.newPrice}</p>
                </div>

                {/* 🎨 Button color changes dynamically */}
                <button
                  style={{ backgroundColor: product.buttonColor }}
                  className="text-white w-16 h-10 flex items-center justify-center rounded-full
                             hover:opacity-80 transition-all duration-300 text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hotoffers;
