import React,{useEffect, useState,useCallback} from "react";
import { FlatList, Platform, View, Button,ActivityIndicator,StyleSheet,Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI//HeaderButton";
import Colors from "../../constants/Colors";
import * as productsActions from '../../store/actions/products'


const ProductOverviewScreen = props => {
  const [isLoading,setIsLoading]=  useState(false);
  const [isrefreshing,setrefreshing]= useState(false)
  const [error,setError]= useState()
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  
  const loadProducts =useCallback(async ()=>{
    //console.log('LOAD PRODUCTS');
    setError(null)
    setrefreshing(true)
    //setIsLoading(true)
    try{
      await dispatch(productsActions.fetchProducts())
    }catch(err){
      setError(err)
    }
    setrefreshing(false)
    //setIsLoading(false)
  },[dispatch,setIsLoading,setError])

  useEffect(()=>{
     const willFocusSub= props.navigation.addListener('willFocus',loadProducts)
     return () =>{
       willFocusSub.remove()
     }
  },[loadProducts]);

  useEffect(()=>{
    setIsLoading(true)
    loadProducts().then(()=>{
    setIsLoading(false)
    })
  },[dispatch,loadProducts])

  const selectItemHandler = (id,title) =>{
    props.navigation.navigate("ProductDetail", {
      productId:id,
      productTitle: title
    });
  }
   
  if(error){
    return (
      <View style={styles.centered}>
        <Text>An Error occured</Text>
        <Button title="try Again"  onPress={loadProducts} color={Colors.primary} />
      </View>
    )
  }

  if(isLoading){
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    )
  }

  if(!isLoading && products.length === 0){
    return (
      <View style={styles.centered}>
          <Text>No Product Found</Text>
      </View>
    )
  }

  return (
    <FlatList
      onRefresh={loadProducts}
      refreshing={isrefreshing}
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

const styles = StyleSheet.create({
  centered:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

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
