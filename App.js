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
import * as Font from "expo-font";

import productsReducer from "./store/reducers/products";
import ShopNavigation from "./navigation/ShopNavigation";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);
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
