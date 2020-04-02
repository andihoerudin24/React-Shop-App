/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import cartReducer from './store/reducers/cart'
import ShopNavigation from "./navigation/ShopNavigation";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  products: productsReducer,
  cart    :cartReducer
});

const store = createStore(rootReducer,composeWithDevTools());
const App = () => {

  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
