import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import covidReducers from "./reducers/covidReducers";

const rootReducer = combineReducers({
    covid: covidReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
    console.log("from index.js")
});

export default store;