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

const rootReducer = combineReducers({
  product: productsReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.sectionContainer}>
        <Text>WELCOME TO REACT NATIVE APPS</Text>
      </View>
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
