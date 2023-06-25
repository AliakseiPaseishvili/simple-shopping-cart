import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Cart =  { [id: number]: number; };

const initialState: Cart = {
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    increaseByAmount: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const id =action.payload.id;
      const count = action.payload.count
      if (state[id]) {
        state[id] += count;
      } else {
        state[id] = count;
      }
    },
    decreaseByAmount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const id =action.payload.id;
      const count = action.payload.count
      if(state[id]) {
        const difference =  state[id] - count;
        if (difference <= 0) {
          delete state[id];
        } else {
          state[id] = difference;
        }
      }
    },
  },
});

export const { increaseByAmount, decreaseByAmount } = cartSlice.actions;

export default cartSlice.reducer;
