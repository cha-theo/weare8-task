import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export default store;