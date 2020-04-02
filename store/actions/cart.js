export const ADD_TO_CARD = 'ADD_TO_CARD'

export const addToCart = product =>{
    return{type:ADD_TO_CARD, product,product}
}