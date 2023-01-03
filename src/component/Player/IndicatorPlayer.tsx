// import { colors } from '@src/constants/vars';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
// import { usePlaybackState, State } from 'react-native-track-player';
import { styles } from './style';

const IndicatorPlayer = () => {
  // const playbackState = usePlaybackState();
  // if (playbackState === State.Connecting || playbackState === State.Buffering)
  return (
    <View style={styles.viewIndicator}>
      <ActivityIndicator color={'white'} />
    </View>
  );
  // return null;
};
export default IndicatorPlayer;
