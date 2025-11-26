<div className="mt-10">
  <h1 className="text-center text-4xl font-bold mb-10">🌵 Hot Offers</h1>

  {/* MOBILE SWIPE CONTAINER */}
  <div className="flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide md:justify-center">
    {products.map((product) => (
      <motion.div
        key={product.id}
        className="w-[300px] flex-shrink-0 snap-center h-[360px] relative rounded-2xl overflow-hidden border border-gray-300 shadow-lg p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tag */}
        <div className="absolute top-3 right-3 z-10 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
          {product.tag}
        </div>

        {/* Content */}
        <div className="p-3 mt-2">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-500 mb-2 text-sm">{product.description}</p>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
              <p className="text-xl font-bold text-green-600">{product.newPrice}</p>
            </div>

            <button
              style={{ backgroundColor: product.buttonColor }}
              className="text-white w-16 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-all duration-300 text-xl"
            >
              +
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
