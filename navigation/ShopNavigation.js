import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(ProductNavigator)