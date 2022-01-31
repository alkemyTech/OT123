import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import contactReducer from "./state/contact";

import logger from "redux-logger";

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
  },
});
