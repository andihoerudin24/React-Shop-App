import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = props => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$TOTAL .{props.total}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button color={Colors.primary} title="Show Detail" />
    </View>
  );
};

const styles = StyleSheet.create({
    orderItem:{
        backgroundColor:'white',
        borderRadius:10,  
        elevation:5,
        shadowRadius:8,
        textShadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowColor:'black',
        margin:20
    }
});

export default OrderItem;
