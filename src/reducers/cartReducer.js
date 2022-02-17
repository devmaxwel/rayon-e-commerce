import {
  ADD_TO_CART,
  CHANGE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload
      };
      
    case CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((p) =>
        p._id === action.payload._id ? p.qty = action.payload.qty : p.qty
      ),
      };

    default:
      return state;
  }
};

