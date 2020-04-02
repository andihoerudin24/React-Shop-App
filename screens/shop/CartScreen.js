import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import Font from "../../constants/Font";
import Colors from "../../constants/Colors";

const CartScreens = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems =useSelector(state => {
  const transFormedCartItems =[]
     for (const key in state.cart.items){
          transFormedCartItems.push({
              productId :key,
              productTitle: state.cart.items[key].productTitle,
              productPrice: state.cart.items[key].productPrice,
              quantity: state.cart.items[key].quantity,
              sum:state.cart.items[key].sum
          })
     } 
     return transFormedCartItems
  })
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: $ <Text style={styles.amount}>${cartTotalAmount.toFixed()}</Text>
        </Text>
        <Button color={Colors.accent} title="Order Now" disabled={cartItems.length === 0} />
      </View>
      <View>
        <Text>CART ITEMS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",

    },
    summaryText:{
        fontFamily:Font.opensansbold,
        fontSize:18
    },
    amount:{
        color:Colors.accent
    },
});

export default CartScreens;
