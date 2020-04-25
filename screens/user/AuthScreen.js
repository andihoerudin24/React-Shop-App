import React,{useState} from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Button,
  TextInput
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
  const dispatch = useDispatch()
  const signuphandler = () =>{
     dispatch(AuthAction.signup(email,password))
  }

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
          <Button title="login" color={Colors.primary} onPress={signuphandler} />
          </View>
          <View style={styles.buttonContainer}>
          <Button title="Swithc to Sign Up" color={Colors.accent} onPress={()=>{

          }} />
          </View>
          
        </ScrollView>
      </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};


AuthScreen.navigationOptions ={
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
