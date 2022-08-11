import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, Image, StyleSheet, useWindowDimensions, Dimensions, secureTextEntry } from 'react-native';
import Logo from '../../images/R.png';
import Logo2 from '../../images/team-rocket.png';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    })
  }, [])

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('Logged in as:', user.email);
      })
      .catch((error) => {
        console.warn('Incorrect email or password');
      });
  };

  const handleForgotPassword = () => {
   console.warn('ForgotPassword');
  };

  const handlePhone = () => {
    navigation.navigate('Phone');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Image source={Logo2} style={styles.logo2} resizeMode="contain" />

        <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)} style={styles.input} />

        <TextInput placeholder='Password' value={setPassword} onChangeText={texts => setPassword(texts)} secureTextEntry={true} style={styles.input} />


        <Button 
        text="Continue" 
        onPress={handleSignIn} 
        type="primary"
        />

        <Button 
        text="Forgot Password?" 
        onPress={handleForgotPassword} 
        type="tertiary"
        />

        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
          <Text style={{alignSelf:'center', paddingHorizontal:5, fontSize: 15, color: 'black' }}>or</Text>
          <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
        </View>

      
        <Button 
        text="Log in with phone number" 
        onPress={handlePhone} 
        type="secondary"
        />

        <Button 
        text="Create account" 
        onPress={handleSignUp} 
        type="tertiary"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  logo: {
    width: '40%',
    maxWidth: 300,
    height: '40%',
    maxHeight: 200,
  },
  logo2: {
    width: '40%',
    maxWidth: 300,
    height: '40%',
    maxHeight: 200,
    marginTop: -100,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#808080',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  }
});

export default SignIn;