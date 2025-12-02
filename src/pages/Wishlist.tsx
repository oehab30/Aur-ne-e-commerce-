import React from "react";
import { api } from "../Lib/utils/api";
import { useQuery } from "@tanstack/react-query";

function Wishlist() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getproduct"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data.products; // <-- FIXED
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

9

  return (
    <div>
      <h1>Wishlist</h1>

      <div>
        {data.map((product) => (
          <div key={product.id}>
            <img src={product.images?.[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
