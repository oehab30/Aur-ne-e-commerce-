import React from 'react';

interface Product {
  id: string | number;
  title: string;
  price: number;
  images: string[];
  category: string;
}

interface DashboardProductGridProps {
  products: Product[];
}

const DashboardProductGrid: React.FC<DashboardProductGridProps> = ({ products }) => {
  return (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Your Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow bg-white hover:shadow-lg transition-shadow"
          >
            <img
              src={product.images?.[0] || 'https://via.placeholder.com/150'}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="font-semibold text-lg text-gray-900 truncate">{product.title}</h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardProductGrid;
