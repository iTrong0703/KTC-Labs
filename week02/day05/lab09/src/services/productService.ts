import type { Product } from "../types/product.types.ts";
import axiosClientProduct from "../api/axiosClientProduct.ts";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosClientProduct.get<Product[]>("/");
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axiosClientProduct.get<Product>(`/${id}`);
  return response.data;
};
export const createProduct = async (
  data: Omit<Product, "id">,
): Promise<Product> => {
  const response = await axiosClientProduct.post<Product>("/", data);
  return response.data;
};

export const updateProduct = async (
  id: string,
  data: Partial<Product>,
): Promise<Product> => {
  const response = await axiosClientProduct.put<Product>(`/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<Product> => {
  const response = await axiosClientProduct.delete<Product>(`/${id}`);
  return response.data;
};
