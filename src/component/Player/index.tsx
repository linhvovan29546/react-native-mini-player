



import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { isAndroid, styles } from './style';
import Animated from 'react-native-reanimated';
// import useAnimationHeader from './useAnimationHeader';
import { useBackHandler } from '../../hooks/useBackHandler';

export const HIT_SLOT_PLAYER = { top: 10, left: 10, right: 10, bottom: 10 };

interface PlayerProps {
  onPress: () => void;
  songDetail: any;

}



const Player = ({ onPress, songDetail }: PlayerProps) => {

  // const { scrollHandler, pointerEventHeader, opacityHeader } = useAnimationHeader();

  useBackHandler(() => {
    return true;
  });


  const renderPlaySong = () => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: songDetail.image }} style={styles.imageAudio} />
            <Text
            >
              {songDetail.name}
            </Text>
            <Text
              style={styles.description}
              numberOfLines={3} >
              {songDetail?.description || ''}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const renderAnimationClose = () => {
    return (
      <Animated.View style={{ opacity: 1, alignSelf: 'center' }}>
        <TouchableOpacity hitSlop={HIT_SLOT_PLAYER} style={styles.btnCross} onPress={onPress}>
          {/* <Image source={ICON_ARROW_DOWN} /> */}
          <Text>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.containerHeader, { marginTop: isAndroid ? 20 : 0 }]}>
        {renderAnimationClose()}
      </View>
      <Animated.ScrollView scrollEventThrottle={16}
        //  onScroll={scrollHandler} 
        style={{ flex: 1 }}>
        <View style={styles.container}>{renderPlaySong()}</View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Player;
