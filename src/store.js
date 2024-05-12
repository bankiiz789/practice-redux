import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import userSlice from "./reducer/user/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice,
  },
});
