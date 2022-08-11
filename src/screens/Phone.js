import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Phone = () => {
  const [phone, setPhone] = useState('');
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState('');

  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }

  const handleCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      requestOtp();
      }
    }, auth);
  }

  const requestOtp = () => {
    if(phone.length >= 12) {
      setExpandForm(true);
      handleCaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        console.log('signedin');
      })
      .catch((error) => {
        console.warn('SMS not sent');
      });
    }
  }

  const verifyOtp = (value) => {
    setOTP(value);

      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(value).then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.root}>
      <Text style={styles.title}>Login With Phone #</Text>

      <Text style={styles.text}>Enter phone number to receive one time password</Text>
      <TextInput placeholder='Phone Number' value={phone} onChangeText={text => setPhone(text)} style={styles.input} />
      <Button text="Submit" onPress={requestOtp} type="primary" />
      <Button text="Sign In" onPress={handleSignIn} type="tertiary" />
      {expandForm === true ? 
        <>
          <Text style={styles.text}>Enter one time password to login</Text>
          <TextInput placeholder='One Time Password' value={OTP} onChangeText={text => verifyOtp(text)} style={styles.input} />
          <Button text="Submit" onPress={requestOtp} type="primary" />
          <Button text="Back to enter phone number" onPress={() => setOTP(false)} type="tertiary"/>
        </>
        :
        null
      }
      <View style={styles.recaptcha}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#DC143C',
    margin: 20,
  },
  text: {
    color: 'black',
    margin: 10,
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
  },
  recaptcha: {

  },
});

export default Phone