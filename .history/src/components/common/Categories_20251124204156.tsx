import React from "react";
import { Link } from "react-router-dom";
import { Tap  from "./Tap";

function Categories() {
  const Categories = ["Nike", "Adidas", "Puma"];

  return (
    <div className="p-8 text-center">
   <Tap />

      <div className="flex justify-center gap-6">
        {Categories.map((cat) => (
          <Link
            key={cat}
            to={`/Menu/${cat}`} // 👈 this goes to /shop/Nike, etc.
            className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
