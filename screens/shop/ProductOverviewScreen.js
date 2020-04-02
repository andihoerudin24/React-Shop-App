import React from "react";
import { FlatList } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart'


const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.avaliableProducts);
  const dispatch = useDispatch()


  return (
    <FlatList
      data={products}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail",{
              productId:itemData.item.id ,
              productTitle:itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item))
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Product"
};

export default ProductOverviewScreen;
