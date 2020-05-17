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
import looger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import {composeWithDevTools} from 'redux-devtools-extension'
import AppNavigator from './navigation/AppNavigator'

const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  orders:ordersReducer,
  auth:authReducer
});


const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
