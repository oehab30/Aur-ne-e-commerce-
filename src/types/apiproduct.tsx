
export interface Product {
  _id: string;
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discount: number;
  price: number;
  soldCount: number;
  category: string;
  color: string;
  material: string;
  stock: number;
  imagePublicId: string;
  imageUrl: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// API response type
export interface GetProductsResponse {
  message: string;
  products: Product[];
}
