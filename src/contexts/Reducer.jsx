export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload.key, qty: action.payload.qty }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.key !== action.payload.key),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.key === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
