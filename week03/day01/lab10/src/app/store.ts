import { productApi } from "../api/productApi.ts";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice.ts";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    ui: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
