import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Player from '../screens/Player';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon name="ios-menu" size={25} color="#000"></Icon>
          ),
        }}
      />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeStackNavigator;
