import React from "react";
import { Link } from "react-router-dom";
import Tap from "./Tap";

const Categories = ({ categories = ["Nike", "Adidas", "Puma"], pageName = "Shop" }) => {
  return (
    <div className="p-8">

      {/* Breadcrumb */}
      <Tap pageName={pageName} />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/shop/${cat}`}
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
