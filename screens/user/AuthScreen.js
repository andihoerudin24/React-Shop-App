import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Button,
  TextInput,
  ActivityIndicator,
  Alert
} from "react-native";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Colors from '../../constants/Colors'
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux'
import * as AuthAction from '../../store/actions/auht'

const AuthScreen = props => {
  const [email,setemail]= useState('')
  const [password,setpassword]=useState('')
  const [isSignup,setIsSignup] = useState(false)
  const [isLoading,setisLoading] = useState(false)
  const [error,setError] = useState()
  const dispatch = useDispatch()

  const Authhandler = async () =>{
    let action
      if(isSignup){
        action=AuthAction.signup(email,password)
      }else{
        action=AuthAction.login(email,password)
      }
    setError(null)  
    setisLoading(true)  
    try{
      await dispatch(action)
      props.navigation.navigate('Shop')
    }catch(err){
      setError(err.message)
      setisLoading(false) 
    }
  }

  useEffect(() =>{
    if(error){
      Alert.alert('An Error Occured!', error,[{text:'Okay'}])
    }
  })
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
        <LinearGradient colors={['#ffedff','#ffe3ff','#192f6a']} style={styles.gradient}>
      <Card style={styles.authContainer}>
        <ScrollView>
          
          <TextInput
            keyboardType="email-address"
            required
            minLength={3}
            onChangeText={(text) => {setemail(text)}}
            placeholder="Email"
          />

          <TextInput
            keyboardType="password"
            required
            minLength={3}
            onChangeText={(text) => {setpassword(text)}}
            placeholder="Password"
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            {isLoading ? <ActivityIndicator size="small" color={Colors.primary} /> :  <Button title={isSignup ? 'Sign Up' : 'Login'} color={Colors.primary} onPress={Authhandler} />
         }
          </View>
          <View style={styles.buttonContainer}>
          <Button title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`} color={Colors.accent} onPress={()=>{
              setIsSignup(prevState => !prevState)
          }} />
          </View>
          
        </ScrollView>
      </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};


export const screenOptions ={
    headerTitle:'Authenticated'
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    },
    authContainer:{
       width:"80%",
       maxWidth:400,
       maxHeight:400,
       padding:20
    },
    gradient:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    buttonContainer:{
        marginTop:10
    }
});

export default AuthScreen;
