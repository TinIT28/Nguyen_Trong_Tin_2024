import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/root";
import { userReducer } from "./reducer/userReducer";
import { postReducer } from "./reducer/postReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const allReducer = combineReducers({
  userReducer,
  postReducer,
});
// mount it on the Store
const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
