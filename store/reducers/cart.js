import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
    items:{},
    totalAmount:0,
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART:
             const addedProduct = action.product
             const productPrice = addedProduct.price
             const productTitle= addedProduct.title
             
             let updatedOrNewCart

             if(state.items[addedProduct.id]){
               updatedOrNewCart= new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                )
             }else{
                 updatedOrNewCart = new CartItem(1,productPrice,productTitle,productPrice)
             }
            return{
                ...state,
                items:{...state.items,[addedProduct.id] : updatedOrNewCart
               },
               totalAmount:state.totalAmount + productPrice
            }
    } 
    return state
}