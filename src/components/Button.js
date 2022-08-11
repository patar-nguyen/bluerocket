import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Button = ({ onPress, text, type }) => {
  return(
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginTop: 30,
    
    borderRadius: 5,
    alignItems: 'center',

  },
  container_primary: {
    backgroundColor: '#DC143C',
  },
  container_secondary: {
    backgroundColor: '#DC143C',
    marginVertical: -10
  },
  container_tertiary: {
    marginVertical: -10
  },
  text: {
    color: 'white',
  },
  text_secondary: {
    color: 'white'
  },
  text_tertiary: {
    color: 'black',
  }
})
export default Button