import React from "react";
import { FlatList, Platform, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI//HeaderButton";
import Colors from "../../constants/Colors";


const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id,title) =>{
    props.navigation.navigate("ProductDetail", {
      productId:id,
      productTitle: title
    });
  }

  return (
    <FlatList
      data={products}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
              selectItemHandler(itemData.item.id,itemData.item.title)        
          }}
        >
        <Button
          color={Colors.primary}
          title="View Detail"
          onPress={()=>{
            selectItemHandler(itemData.item.id,itemData.item.title)
          }}
        />
        <Button
          color={Colors.primary}
          title="To Cart"
          onPress={()=>{
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
        </ProductItem>  
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = navData => {
  return{
        headerTitle: "All Product",
        headerLeft:() =>{
        return(
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
        },
        headerRight: () => {
          return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                    navData.navigation.navigate('Cart')
                }}
              />
            </HeaderButtons>
          );
        }
 }
};

export default ProductOverviewScreen;
