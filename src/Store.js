import {createStore} from "redux";
import rootreducers from "./redux/reducers/Main";

const store = createStore(
    rootreducers
);

export default store;


