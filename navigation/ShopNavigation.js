import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";

import ProductOverviewScreen, {
  screenOptions,
} from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen, {
  screenOptions as OptionsDetailScreen,
} from "../screens/shop/ProductDetailScreen";
import CartScreens, {
  screenOptions as OptionsCartScreen,
} from "../screens/shop/CartScreen";
import OrderScreen, {
  screnOptions as OptionsOrderScreen,
} from "../screens/shop/OrderScreen";
import UserProductScreen, {
  ScreenOptions as OptionsUserProductScreen,
} from "../screens/user/UserProductScreen";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform, SafeAreaView, Button, View } from "react-native";
import EditProductScreen, {
  ScrenOptions as OptionsEditProductScreen,
} from "../screens/user/EditProductScreen";
import AuthScreen,{screenOptions as OptionsAuthScreen} from "../screens/user/AuthScreen";
import { useDispatch } from "react-redux";
import * as authaction from "../store/actions/auht";

console.disableYellowBox = true;
const defaultNvOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: Font.opensansbold,
  },
  headerBackTitleStyle: {
    fontFamily: Font.opensansreguler,
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProcutStackNavigator = createStackNavigator();

export const ProductNavigator = () => {
  return (
    <ProcutStackNavigator.Navigator screenOptions={defaultNvOptions}>
      <ProcutStackNavigator.Screen
        name="ProductOverview"
        component={ProductOverviewScreen}
        options={screenOptions}
      />
      <ProcutStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={OptionsDetailScreen}
      />
      <ProcutStackNavigator.Screen
        name="Cart"
        component={CartScreens}
        options={OptionsCartScreen}
      />
    </ProcutStackNavigator.Navigator>
  );
};

const OrderStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrderStackNavigator.Navigator screenOptions={defaultNvOptions}>
      <OrderStackNavigator.Screen
        name="Orders"
        component={OrderScreen}
        options={OptionsOrderScreen}
      />
    </OrderStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNvOptions}>
      <AdminStackNavigator.Screen
        name="UserProduct"
        component={UserProductScreen}
        options={OptionsUserProductScreen}
      />
      <AdminStackNavigator.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={OptionsEditProductScreen}
      />
    </AdminStackNavigator.Navigator>
  );
};

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => {
      
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authaction.logout());
                  //props.navigation.navigate("Auth");
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () =>{
  return (
  <AuthStackNavigator.Navigator ScreenOptions={defaultNvOptions}>
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} options={OptionsAuthScreen} />
  </AuthStackNavigator.Navigator>)
}


// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator,
// });

// export default createAppContainer(MainNavigator);
