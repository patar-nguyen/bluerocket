import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Logo from '../../images/rocket.png';
import Logo2 from '../../images/bluerocket.png';
import { auth } from '../firebase/config';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace('SignIn');
    })
    .catch(error => console.log(error));
  }

  return(
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Image source={Logo2} style={styles.logo2} resizeMode="contain" />

      <Text style={{fontSize: 24, alignSelf: 'center', color: 'white'}}>Welcome to Blue Rocket!</Text>
      <Text style={{color: 'white'}}>You are logged in as: {auth.currentUser?.email}</Text>
      <Button 
        text="Sign Out" 
        onPress={handleSignOut} 
        type="primary"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#191970',
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
  },
});

export default Home;