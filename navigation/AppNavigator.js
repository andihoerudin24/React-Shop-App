import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
//import {createStackNavigator} from '@react-navigation/stack'
import { ProductNavigator } from "./ShopNavigation";

//const MyStack = createStackNavigator();

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  return (
    <NavigationContainer>
      <ProductNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
