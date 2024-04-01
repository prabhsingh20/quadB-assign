import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.packed = !item.packed;
      }
    },
    clearList: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, toggleItem, clearList } =
  itemsSlice.actions;
export default itemsSlice.reducer;
