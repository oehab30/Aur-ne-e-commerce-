import React from "react";
import { api } from "@/lib/utils/api";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

function Wishlist() {
  const { isPending, error, data } = useQuery<Product[]>({
    queryKey: ["getproduct"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data.products; // <-- the array from API
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Products from API</h1>

      <pre className="bg-gray-100 p-4 rounded mb-6">
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow bg-white"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-3 font-semibold text-lg">{product.title}</h2>
            <p className="text-green-700 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
