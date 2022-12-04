import { createStore } from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(productReducer, composeWithDevTools()); //using redux devtool

export default store;