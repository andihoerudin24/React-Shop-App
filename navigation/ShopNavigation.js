import React from "react";
import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreens from "../screens/shop/CartScreen";
import OrderScreen from '../screens/shop/OrderScreen'
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";


const defaultNvOptions ={
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle:{
    fontFamily:Font.opensansbold
  },
  headerBackTitleStyle:{
    fontFamily:Font.opensansreguler
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
}


const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart:CartScreens
  },
  {
    navigationOptions:{
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={Platform.OS==='android' ? 'md-list' : 'ios-list'}
          size={23}
          color={tintColor}
        />
      )
    },
    defaultNavigationOptions:defaultNvOptions 
  }
);

const OrdersNavigator = createStackNavigator({
   Orders: OrderScreen
}, {
    navigationOptions:{
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={Platform.OS==='android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={tintColor}
        />
      )
    },
   defaultNavigationOptions:defaultNvOptions
})

const ShopNavigator = createDrawerNavigator ({
   Products:ProductNavigator,
   Orders:OrdersNavigator
},{
   contentOptions:{
     activeTintColor:Colors.primary
   }
})

export default createAppContainer(ShopNavigator)