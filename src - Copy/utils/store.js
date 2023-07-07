import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userInfoSlice from "./userInfoSlice.js";

const store= configureStore({
    reducer: {
        cart: cartSlice,
        userInfo: userInfoSlice
    },

});
export default store;