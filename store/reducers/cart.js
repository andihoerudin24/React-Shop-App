import { ADD_TO_CARD, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updatetOrNewCartitem;

      if (state.items[addedProduct.id]) {
        updatetOrNewCartitem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        updatetOrNewCartitem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatetOrNewCartitem },
        totalAmount: state.totalAmount + productPrice
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.productId];
      const currentQuantity = selectedCartItem.quantity;
      let updatedCaratItems;
      if (currentQuantity > 1) {
        const updatedCaratItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCaratItems = {
          ...state.items,
          [action.productId]: updatedCaratItem
        };
      } else {
        updatedCaratItems = { ...state.items };
        delete updatedCaratItems[action.productId];
      }
      return {
        ...state,
        items: updatedCaratItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice
      };
      case ADD_ORDER:
        return initialState;
       
  }
  return state;
};
