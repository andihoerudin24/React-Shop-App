import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Font from "../../constants/Font";
const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>$ {props.amount}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButoon}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            color="red"
            size={16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    flexWrap:'wrap'
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center"
  },
  quantity: {
    fontFamily: Font.opensansreguler,
    color: "#888",
    fontSize: 16,
    letterSpacing:20
  },
  mainText: {
    fontFamily: Font.opensansbold,
    fontSize: 16
  },
  deleteButoon: {
    marginLeft: 20,
  }
});

export default CartItem;
