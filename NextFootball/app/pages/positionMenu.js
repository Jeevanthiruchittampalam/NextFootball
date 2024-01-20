// menu.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MenuButton title="Running Back" onPress={() => {navigation.navigate('RBMenu')/* Navigate to Model Information Screen */}} />
      <MenuButton title="Guard" onPress={() => {navigation.navigate('Creators')/* Navigate to Project Information Screen */}} />
      <MenuButton title="Quarterback" onPress={() => {navigation.navigate('Entry')/* Navigate to Project Information Screen */}} />
      <MenuButton title="Wide Reciever" onPress={() => {/* Navigate to Upload Screen */}} />
      <MenuButton title="Kicker" onPress={() => {/* Navigate to User Outputs Screen */}} />
    </View>
  );
};

const MenuButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#193140', // Set the background color to #193140
  },
  button: {
    backgroundColor: 'white', // Button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 10,
    width: Dimensions.get('window').width * 0.8, // 80% of screen width
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#193140', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
