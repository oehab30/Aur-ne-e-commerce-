import React from "react";
import { Link, useParams } from "react-router-dom";
import Tap from "./Tap";

const Categories = ({ categories = ["Nike", "Adidas", "Puma"] }) => {
  const { category } = useParams(); // get the category from the URL

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <Tap pageName={category || "Shop"} />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/shop/${cat}`} // update URL when clicked
            className={`px-6 py-3 rounded-full font-medium shadow-md transition duration-300 ${
              category === cat
                ? "bg-red-700 text-white"
                : "bg-red-500 text-white hover:bg-red-700"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
