import { ADD_TO_CARD } from "../actions/cart";
import CartItem from "../../models/cart-item";

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

      let updatetOrNewCartitem

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
        totalAmount:state.totalAmount + productPrice
      };
  }
  return state;
};
