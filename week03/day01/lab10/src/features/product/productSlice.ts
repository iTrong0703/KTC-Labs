import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  currentView: "list" | "add" | "edit" | "detail";
  selectedProductId: string | null;
}

const initialState: UiState = {
  isLoading: false,
  error: null,
  successMessage: null,
  currentView: "list",
  selectedProductId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload;
    },
    setCurrentView: (
      state,
      action: PayloadAction<"list" | "add" | "edit" | "detail">,
    ) => {
      state.currentView = action.payload;
    },
    setSelectedProductId: (state, action: PayloadAction<string | null>) => {
      state.selectedProductId = action.payload;
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
});

export const {
  setLoading,
  setError,
  setSuccessMessage,
  setCurrentView,
  setSelectedProductId,
  clearMessages,
} = uiSlice.actions;

export default uiSlice.reducer;
