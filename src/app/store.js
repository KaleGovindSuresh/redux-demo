import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import userReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export default store;
