import React from 'react';
import { Dimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  clamp,

} from 'react-native-redash';
import { LogBox } from 'react-native';
const { height } = Dimensions.get('window');
const TABBAR_HEIGHT = 80;//height of bottom tab
const MINIMIZED_PLAYER_HEIGHT = 80; //maximun height of miniplayer
const SNAP_TOP = 0;
const SNAP_BOTTOM = height;

const {
  Extrapolate } = Animated;
LogBox.ignoreLogs(['useCode() first argument should be a function that returns an animation node.']);
export const refPlayer = React.createRef<any>();

const useMiniPlayer = (tabBarHeight = TABBAR_HEIGHT, miniPlayerHeight = MINIMIZED_PLAYER_HEIGHT) => {
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
      opacity: interpolate(translateY.value,
        [0, SNAP_BOTTOM * 2],
        [1, 0],
        Extrapolate.CLAMP,
      )
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
        [0, miniPlayerHeight],
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
  // const snapPoints = [SNAP_TOP, SNAP_BOTTOM]
  // const gestureHandler = useAnimatedGestureHandler({
  //   onActive: ({ translationY }, context) => {
  //     translateY.value = clamp(
  //       context.offsetY + translationY,
  //       SNAP_TOP,
  //       SNAP_BOTTOM,
  //     )
  //   },
  //   onEnd: ({ velocityY }) => {
  //     const destination = snapPoint(translateY.value, velocityY, snapPoints)
  //     translateY.value = withTiming(destination)
  //   },
  //   onStart: (_event, context: any) => {
  //     context.offsetY = translateY.value
  //   },
  // });
  return {
    translateY: translateY.value,
    bottomTabAnimatedStyle,
    miniPlayerAnimatedStyle,
    goUpPlayer,
    goDownPlayer,
    refPlayer,
    animatedFullScreenStyles,
    // gestureHandler
  };
};

export default useMiniPlayer;
