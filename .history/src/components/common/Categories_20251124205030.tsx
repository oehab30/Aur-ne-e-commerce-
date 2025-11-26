import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tap from "./Tap";

const Categories = ({ categories = ["Nike", "Adidas", "Puma"] }) => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <Tap pageName={selectedCategory || "Shop"} />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/shop/${cat}`}
            onClick={() => setSelectedCategory(cat)} // update breadcrumb
            className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
