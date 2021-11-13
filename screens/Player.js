import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const Player = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: height / 3, alignItems: 'center'}}>
        <VideoPlayer
          source={{
            uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
          }}
          disableFullscreen={true}
          resizeMode={'contain'}
          seekColor={'#50A5F4'}
          navigator={navigation}
          disableVolume={true}
          // muted={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Player;
