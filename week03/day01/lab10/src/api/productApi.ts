import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductInput } from "../types/product.types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6870769d7ca4d06b34b6dc65.mockapi.io/api/v1/products",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/",
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    createProduct: builder.mutation<Product, ProductInput>({
      query: (newProduct) => ({
        url: "/",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; product: ProductInput }
    >({
      query: ({ id, product }) => ({
        url: `/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id },
        { type: "Product" },
      ],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
