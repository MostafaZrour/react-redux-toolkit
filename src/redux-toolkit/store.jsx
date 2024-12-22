import { configureStore } from "@reduxjs/toolkit";
import { UserSlice , CounterSlice } from "./UserSlice";
import { productSlice } from "./ProductSlice";
// import { logger } from "redux-logger";
const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    counter : CounterSlice.reducer,
    products : productSlice.reducer
  },
  // middleware  :(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default  store ;