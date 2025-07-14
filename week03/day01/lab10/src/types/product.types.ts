export interface Product {
  id: string;
  name: string;
  price: string;
  brand: string;
  category: string;
}

export type ProductInput = Omit<Product, "id">;
