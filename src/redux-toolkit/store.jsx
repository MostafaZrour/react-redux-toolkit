import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./UserSlice";
import { logger } from "redux-logger";
const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
  middleware  :(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default  store ;