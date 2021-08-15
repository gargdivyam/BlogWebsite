import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from "../reducer/Reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const Store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default Store;