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
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((crt) => crt._id !== action.payload._id),
      };
    case CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((crt) =>
          crt._id === action.payload._id ? crt.qty = action.payload.qty : crt.qty
        ),
      };

    default:
      return state;
  }
};
