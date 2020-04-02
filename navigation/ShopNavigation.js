import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreens from "../screens/shop/CartScreen";


import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Platform } from "react-native";

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart:CartScreens
  },
  {
    defaultNavigationOptions: {
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
  }
);

export default createAppContainer(ProductNavigator)