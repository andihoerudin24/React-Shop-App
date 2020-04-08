import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const OrderItem = props => {
  const [showDetails, setShowDetail] = useState(false);
  console.log(showDetails);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$TOTAL .{props.total}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? "Hide Details" : "Show Details" }
        onPress={() => {
          setShowDetail(prevState => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map(cartItem => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 8,
    textShadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowColor: "black",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15
  },
  totalAmount: {
    fontFamily: Font.opensansbold,
    fontSize: 16
  },
  date: {
    fontSize: 16,
    fontFamily: Font.opensansreguler,
    color: "#888"
  },
  detailItems:{
     width:'100%',
  }
});

export default OrderItem;
