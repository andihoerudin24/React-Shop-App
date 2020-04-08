import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI//HeaderButton";
import OrderItemComponent from "../../components/shop/OrderItem";

const OrdersScrenn = props => {
  const orders = useSelector(state => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData =>
        <OrderItemComponent total={itemData.item.totalAmount.toFixed()} date={itemData.item.readableDate
        } 
        items={itemData.item.items} />
      }
    />
  );
};

OrdersScrenn.navigationOptions = navData => {
  return {
    headerTitle: "Your Order",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    }
  };
};

export default OrdersScrenn;
