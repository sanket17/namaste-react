const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      // console.log("Logging state variable->", state);
      // console.log("Logging state varibale using current ->", current(state));
      // console.log("Action -> ", action);
      state.item.push(action.payload);
    },
    clearCart: () => {
      return {
        item: [],
      };
    },
    removeItem: (state, action) => {
      state.item = state.item.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
