import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {
  clamp,
  timing,
  withSpring
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
  Clock,
  Value,
  cond, useCode, set, block, not, clockRunning,
  interpolate, Extrapolate } = Animated;
LogBox.ignoreLogs(['useCode() first argument should be a function that returns an animation node.']);
export const refPlayer = React.createRef<any>();

const useMiniPlayer = (tabBarHeight = TABBAR_HEIGHT, miniPlayerHeight = MINIMIZED_PLAYER_HEIGHT) => {

  const translationY = useRef(new Value(0));
  const velocityY = useRef(new Value(0));
  const state = useRef(new Value(State.UNDETERMINED));
  const offset = new Value(SNAP_BOTTOM);
  const goUp: React.MutableRefObject<Animated.Value<0 | 1>> = useRef(new Value(0));
  const goDown: React.MutableRefObject<Animated.Value<0 | 1>> = useRef(new Value(0));

  const translateY = useRef(
    clamp(
      withSpring({
        state: state.current,
        value: translationY.current,
        velocity: velocityY.current,
        offset,
        snapPoints: [SNAP_TOP, SNAP_BOTTOM],
        config,
      }),
      SNAP_TOP,
      SNAP_BOTTOM,
    ),
  );
  const translateBottomTab = interpolate(translateY.current, {
    inputRange: [SNAP_TOP, SNAP_BOTTOM],
    outputRange: [tabBarHeight, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolate(translateY.current, {
    inputRange: [SNAP_BOTTOM - miniPlayerHeight, SNAP_BOTTOM],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacityMiniPayer = interpolate(translateY.current, {
    inputRange: [SNAP_BOTTOM - miniPlayerHeight * 2, SNAP_BOTTOM - miniPlayerHeight],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const maxHeightAnimation = interpolate(translateY.current, {
    inputRange: [SNAP_BOTTOM - miniPlayerHeight * 2, SNAP_BOTTOM - miniPlayerHeight],
    outputRange: [0, 120],
    extrapolate: Extrapolate.CLAMP,
  });
  const pointerEvents = cond(translateY.current, 'auto', 'none');

  const clock = new Clock();

  useCode(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    block([
      cond(goUp.current, [
        set(
          offset,
          timing({
            clock,
            from: offset,
            to: SNAP_TOP,
          }),
        ),
        cond(not(clockRunning(clock)), [set(goUp.current, 0)]),
      ]),
      cond(goDown.current, [
        set(
          offset,
          timing({
            clock,
            from: offset,
            to: SNAP_BOTTOM,
          }),
        ),
        cond(not(clockRunning(clock)), [set(goDown.current, 0)]),
      ]),
    ]),
    [],
  );
  const goUpPlayer = () => {
    goUp.current.setValue(1);
  };
  const goDownPlayer = () => {
    goDown.current.setValue(1);
  };
  return {
    translateY: translateY.current,
    translateBottomTab: translateBottomTab,
    opacity,
    opacityMiniPayer,
    goUpPlayer,
    goDownPlayer,
    refPlayer,
    maxHeightAnimation,
    pointerEvents
  };
};

export default useMiniPlayer;
