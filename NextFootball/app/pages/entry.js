import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Entry = ({ navigation }) => {
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    age: '',
    position: '',
    team: '',
    nationality: '',
    appearances: '',
    goals: '',
    assists: '',
    yellowCards: '',
    redCards: ''
  });

  const handleChange = (name, value) => {
    setPlayerInfo({ ...playerInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Submitted Player Info:', playerInfo);
    // Here you can also send this data to a backend server if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter Football Player Information</Text>
      {Object.keys(playerInfo).map((key) => (
        <TextInput
          key={key}
          style={styles.input}
          onChangeText={(value) => handleChange(key, value)}
          value={playerInfo[key]}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          placeholderTextColor="#ccc"
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#193140',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E1E1E1',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Entry;
