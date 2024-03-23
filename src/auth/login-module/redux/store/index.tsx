import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slice/index";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
