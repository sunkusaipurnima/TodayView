import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

const ChatScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ChatScreen;
