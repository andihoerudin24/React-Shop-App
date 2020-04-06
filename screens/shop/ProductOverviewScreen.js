import React from "react";
import { FlatList, Platform, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI//HeaderButton";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.avaliableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
      )}
      keyExtractor={item => item.id}
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
