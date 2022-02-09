import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsListReducer} from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';
import { userRegistration } from './reducers/userReducer';


const reducer = combineReducers({

     productList:productsListReducer,
     cartList:cartReducer,
     userRegister:userRegistration
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;