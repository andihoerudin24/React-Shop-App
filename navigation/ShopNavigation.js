import React from "react";
import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator,DrawerNavigatorItems } from "react-navigation-drawer";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreens from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import UserProductScreen from "../screens/user/UserProductScreen";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform,SafeAreaView,Button,View} from "react-native";
import EditProductScreen from "../screens/user/EditProductScreen";
import AuthScreen from '../screens/user/AuthScreen'
import StartupScreen from '../screens/startupScrenn'
import {useDispatch} from 'react-redux'
import * as authaction from '../store/actions/auht'

console.disableYellowBox = true;
const defaultNvOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: Font.opensansbold
  },
  headerBackTitleStyle: {
    fontFamily: Font.opensansreguler
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreens
  },
  {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNvOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrderScreen
  },
  {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNvOptions
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProduct: UserProductScreen,
    EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
          color={tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNvOptions
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    },
    contentComponent: props => {
        const dispatch = useDispatch()
        return (<View style={{flex:1,padding:20}}>
              <SafeAreaView forceInset={{top: 'always',horizontal:'never'}}>
                <DrawerNavigatorItems {...props}/>
                <Button title="Logout" color={Colors.primary} onPress={() =>{
                   dispatch(authaction.logout());
                   props.navigation.navigate('Auth');
                }} />
              </SafeAreaView>
        </View>)
    }
  }
);

const AuthNavigator = createStackNavigator({
  Auth:AuthScreen
},{
  defaultNavigationOptions:defaultNvOptions
})

const MainNavigator = createSwitchNavigator({
   Startup:StartupScreen,
   Auth:AuthNavigator,
   Shop:ShopNavigator
})

export default createAppContainer(MainNavigator);
