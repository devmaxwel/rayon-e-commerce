import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer } from '../reducers/productsReducer';

const reducers = combineReducers({
     productsList:productsReducer
});

const initialState = {}

const middleware = [thunk];

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

);