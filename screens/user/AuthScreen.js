import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Button
} from "react-native";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Colors from '../../constants/Colors'
import LinearGradient from 'react-native-linear-gradient';

const AuthScreen = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
        <LinearGradient colors={['#ffedff','#ffe3ff','#192f6a']} style={styles.gradient}>
      <Card style={styles.authContainer}>
        <ScrollView>
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            minLength={3}
            autoCapitalize="none"
            errorMessage="Please enter a valid email address"
            onInputChange={() => {}}
            initialValue=""
          />

          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            email
            autoCapitalize="none"
            errorMessage="Please enter a valid password"
            onInputChange={() => {}}
            initialValue=""
          />
          <View style={styles.buttonContainer}>
          <Button title="login" color={Colors.primary} onPress={()=>{
               props.navigation.navigate("ProductOverview")
          }} />
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
