import React, { useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import Animated, { interpolate, interpolateNode, runOnJS, runOnUI, useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import {
  clamp, useSpring,

} from 'react-native-redash';
import { LogBox } from 'react-native';
const { height } = Dimensions.get('window');
const TABBAR_HEIGHT = 80;//height of bottom tab
const MINIMIZED_PLAYER_HEIGHT = 80; //maximun height of miniplayer
const SNAP_TOP = 0;
const SNAP_BOTTOM = height;
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1,
};
const {
  cond,
  Extrapolate } = Animated;
LogBox.ignoreLogs(['useCode() first argument should be a function that returns an animation node.']);
export const refPlayer = React.createRef<any>();

const useMiniPlayer = (tabBarHeight = TABBAR_HEIGHT, miniPlayerHeight = MINIMIZED_PLAYER_HEIGHT) => {

  // const translationY = useSharedValue(0);
  // const velocityY = useSharedValue(0);
  // const state = useSharedValue(0);
  // const offset = useSharedValue(SNAP_BOTTOM);

  const translateY = useSharedValue(
    clamp(
      SNAP_BOTTOM,
      SNAP_TOP,
      SNAP_BOTTOM,
    ),
  );

  const goUpPlayer = () => {
    translateY.value = withTiming(SNAP_TOP)
  }

  const goDownPlayer = () => {
    translateY.value = withTiming(SNAP_BOTTOM)
  }

  const animatedFullScreenStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const miniPlayerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: interpolate(translateY.value,
          [SNAP_TOP, SNAP_BOTTOM],
          [tabBarHeight, 0],
          Extrapolate.CLAMP,
        )
      }],
      maxHeight: interpolate(translateY.value,
        [SNAP_BOTTOM - miniPlayerHeight * 2, SNAP_BOTTOM - miniPlayerHeight],
        [0, 120],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(translateY.value,
        [SNAP_BOTTOM - miniPlayerHeight * 2, SNAP_BOTTOM - miniPlayerHeight],
        [0, 1],
        Extrapolate.CLAMP,
      )
    }
  })

  const bottomTabAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: interpolate(translateY.value,
          [SNAP_TOP, SNAP_BOTTOM],
          [tabBarHeight, 0],
          Extrapolate.CLAMP,
        )
      }]
    }
  })

  return {
    translateY: translateY.value,
    bottomTabAnimatedStyle,
    miniPlayerAnimatedStyle,
    goUpPlayer,
    goDownPlayer,
    refPlayer,
    animatedFullScreenStyles
  };
};

export default useMiniPlayer;
