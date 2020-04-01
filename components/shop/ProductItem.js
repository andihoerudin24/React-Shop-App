import React from "react";
import { View, Text, Image, StyleSheet, Button,TouchableOpacity, TouchableNativeFeedback,Platform } from "react-native";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";


const ProductItem = props => {
  let TouchableCmp= TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableCmp= TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
      <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View>
      <View style={styles.imageContainer}>
      <Image
        source={{
          uri: props.image
        }}
        style={styles.image}
      />  
      </View>
      
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="View Detail"
          onPress={props.onViewDetail}
        />
        <Button
          color={Colors.primary}
          title="To Cart"
          onPress={props.onAddToCart}
        />
      </View>
      </View>
    </TouchableCmp>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable:{
    borderRadius:10,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily:Font.opensansbold
  },
  price: {
    fontSize:20,
    fontSize: 14,
    color: "#888",
    fontFamily:Font.opensansreguler
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 22
  },
  imageContainer:{
    width: "100%",
    height: "60%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden'
  }
});

export default ProductItem;
