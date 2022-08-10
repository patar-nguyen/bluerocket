import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TextInput, secureTextEntry } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('Registered:', user.email);
      })
      .catch((error) => {
        console.warn('Incorrect email or password must be 6 characters');
      });
  }

  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }

  const handlePhone = () => {
    console.warn("Phone");
  };

  const termsOfService = () => {
    console.warn("TOS");
  }

  const privacyNotice = () => {
    console.warn("PN");
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)} style={styles.input} />

        <TextInput placeholder='Password' value={setPassword} onChangeText={texts => setPassword(texts)} secureTextEntry={true} style={styles.input} />

        <Button 
        text="Sign Up" 
        onPress={handleSignUp} 
        type="primary"
        />

        <Text style={styles.text}>I agree to the <Text style={styles.link} onPress={termsOfService}>Terms of Service.</Text> I have also read and acknowledged the <Text style={styles.link} onPress={privacyNotice}>Privacy Notice.</Text></Text>

        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <View style={{backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center'}} />
          <Text style={{alignSelf:'center', paddingHorizontal:5, fontSize: 15, color: 'white' }}>or</Text>
          <View style={{backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center'}} />
        </View>

        <Button 
        text="Log in with phone number" 
        onPress={handlePhone} 
        type="secondary"
        />

        <Button 
        text="Sign In" 
        onPress={handleSignIn} 
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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#191970',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  text: {
    color: 'gray',
    margin: 10,
  },
  link: {
    color: 'white',
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

export default SignUp;