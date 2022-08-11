 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
 } from 'react-native';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import SignIn from './src/screens/SignIn';
 import SignUp from './src/screens/SignUp';
 import Home from './src/screens/Home';
 import Phone from './src/screens/Phone';

 const Stack = createNativeStackNavigator();
 
 const App = () => {
 
   return (
     <SafeAreaView style={styles.root}>
       <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="SignIn" component={SignIn} />
           <Stack.Screen name="SignUp" component={SignUp} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Phone" component={Phone} /> 
 
         </Stack.Navigator>
     </NavigationContainer>
     </SafeAreaView>
   );
 
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#F5F5F5',
   }
 });
 
 export default App;
 