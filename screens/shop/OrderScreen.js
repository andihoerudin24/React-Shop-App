import React,{useEffect,useState} from "react";
import { FlatList, Text, Platform,ActivityIndicator,View,StyleSheet } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI//HeaderButton";
import OrderItemComponent from "../../components/shop/OrderItem";
import * as OrdersAction from '../../store/actions/orders'
import Colors from "../../constants/Colors";

const OrdersScrenn = props => {
  const [isLoading, setIsLoading]=  useState(false)
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch()

  useEffect(()=>{
        setIsLoading(true) 
        dispatch(OrdersAction.fetchOrders()).then(()=>{
        setIsLoading(false)
     })
  },[dispatch])
  
  if(isLoading){
    return(
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary}/>
      </View>
    )
  }

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

export const screnOptions = navData => {
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

const styles = StyleSheet.create({
  centered:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default OrdersScrenn;
