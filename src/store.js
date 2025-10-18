import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userSte: userReducer,
  },
});

export default store;
