import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import reducer from "./reducer";

const store = createStore(
  reducer,
  process.env.NODE_ENV === "development"
    ? applyMiddleware(thunkMiddleware, loggerMiddleware)
    : applyMiddleware(thunkMiddleware)
);

export default store;
