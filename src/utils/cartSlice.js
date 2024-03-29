import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
  name:"cart",
  initialState:{
    items:[],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
  },
  reducers:{
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
      }
      state.cartTotalQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.cartTotalQuantity -= 1;
      }
      // }else {
      //   state.cartTotalQuantity--;
      //   delete state.items[itemIndex];
      // }
    },
    removeItem: (state, action) => {
      console.log("hdjbd",state,action)
      const newCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartTotalQuantity -= action.payload.quantity;
      state.items = newCartItems;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotalQuantity = 0;
    },
    getTotalAmount: (state, action) => {
      console.log("hdsjdb",state)
      const total = state.items.reduce((cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        cartTotal += quantity * price;
        return cartTotal;
      }, 0);
      state.cartTotalAmount = total;
      console.log("hdjbdjasisb",total)

    },
    // addItem: (state,action)=> {
    //     state.items.push(action.payload)
    // },
    // removeItem: (state,action) => {
    //   console.log("dfjf",action.payload)
    //     state.items.pop()
    //     // state.splice(action.payload,1);
    // },
    clearCart: (state) => {
        state.items =[];
    }
  }
})
export const { addItem,removeItem,clearCart,
  decreaseQuantity,
  getTotalAmount}= cartSlice.actions;
export default cartSlice.reducer;