import React,{useEffect} from 'react'
import {View,ActivityIndicator,StyleSheet,AsyncStorage} from 'react-native'
import { create } from 'react-test-renderer'
import Colors from '../constants/Colors'
import {useDispatch} from 'react-redux'
import * as authAction from '../store/actions/auht'

const StartupScreen = props =>{
   const dispatch = useDispatch() 
   useEffect(()=>{
      const tryLogin = async () =>{
           const userData =await AsyncStorage.getItem('userData')
           console.log('userData',userData)
           if(!userData){
            // props.navigation.navigate('Auth')   
            return;
           }
           const transfromdata= JSON.parse(userData);
           const {token,userId,expiryDate} = transfromdata
          
            const expirationDate = new Date(expiryDate)
            // console.log('usertoke',token)
            //    if(expirationDate <= new Date() || !token ||userId){
            //     props.navigation.navigate('Auth')   
            //     return;
            //    }
           const expiretionTime = expirationDate.getTime() - new Date().getTime(); 
            
           //props.navigation.navigate('Shop')
           dispatch(authAction.authenticate(userId,token,expiretionTime))
      }

      tryLogin()
   },[dispatch])
   return(
       <View style={styles.screen}>
           <ActivityIndicator size='large' color={Colors.primary}/>
       </View>
   )
}

const styles= StyleSheet.create({
     screen:{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
     }
})

export default StartupScreen