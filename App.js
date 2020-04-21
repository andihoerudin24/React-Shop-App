/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStore, combineReducers,applyMiddleware,compose  } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'
import ShopNavigation from "./navigation/ShopNavigation";
import looger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  orders:ordersReducer
});


const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
};

export default App;
