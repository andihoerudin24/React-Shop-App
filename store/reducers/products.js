import PRODUCTS from '../../data/dummy-data'

const initialState = {
  avaliableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'ul')
};

export default (state = initialState, action) => {
    return state;
};
 