import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const CreatorsScreen = ({ navigation }) => {
  const imageSize = Dimensions.get('window').width * 0.5; // Use 50% of screen width for the image size

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>About the Creators</Text>
      
      <View style={styles.creator}>
        <Image
          source={require('../assets/amirheadshot.jpg')}
          style={[styles.headshot, { width: imageSize, height: imageSize }]}
          resizeMode="contain"
        />
        <Text style={styles.paragraph}>
          Amir description
        </Text>
      </View>

      <View style={styles.creator}>
        <Image
          source={require('../assets/jeevliheadshot.jpg')}
          style={[styles.headshot, { width: imageSize, height: imageSize }]}
          resizeMode="contain"
        />
        <Text style={styles.paragraph}>
          Jeevan
        </Text>
      </View>

      <View style={styles.creator}>
        <Image
          source={require('../assets/leopalermaheadshot.jpg')}
          style={[styles.headshot, { width: imageSize, height: imageSize }]}
          resizeMode="contain"
        />
        <Text style={styles.paragraph}>
          Leo
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#193140',
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  creator: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headshot: {
    marginBottom: 10,
  },
  paragraph: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E1E1E1',
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#193140',
    fontWeight: 'bold',
  },
});

export default CreatorsScreen;
