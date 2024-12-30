import { configureStore } from "@reduxjs/toolkit";
import { UserSlice , CounterSlice } from "./UserSlice";
import { productSlice } from "./ProductSlice";
import { themeSlice } from "./themeSlice";
// import { logger } from "redux-logger";
const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    counter : CounterSlice.reducer,
    products : productSlice.reducer,
    theme :  themeSlice.reducer,
  },
  // middleware  :(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default  store ;