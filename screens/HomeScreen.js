import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
const HomeScreen = ({navigation}) => {
  const playVideo = () => {
    console.log('Play video');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Today View</Text>
      <TouchableOpacity
        style={styles.videoButton}
        onPress={() => {
          navigation.navigate('Player');
        }}>
        <Text style={styles.buttonText}>Play Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  videoButton: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'lightblue',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default HomeScreen;
