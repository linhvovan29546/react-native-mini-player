import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { styles } from '../style';
// import {
//   PanGestureHandler,
// } from 'react-native-gesture-handler'

interface PlayerProps {
  goDown: () => void;
  goUp: () => void;
  renderUiFullScreen: () => JSX.Element;
  renderMiniPlayer: () => JSX.Element;
  header?: () => JSX.Element;
  tabBarHeight?: number;
  containerMiniPlayer?: ViewStyle;
  enableDraggable?: boolean;
  animatedFullScreenStyles?: AnimatedStyleProp<ViewStyle>;
  miniPlayerAnimatedStyle?: AnimatedStyleProp<ViewStyle>;
  gestureHandler?: () => any
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const {
    tabBarHeight = 80, containerMiniPlayer,
    animatedFullScreenStyles, miniPlayerAnimatedStyle,
    goDown, goUp, renderMiniPlayer, renderUiFullScreen,
    // gestureHandler 
  } = props;

  const refWarapDaraggable = useRef(null)
  useImperativeHandle(ref, () => ({
    goUpPlayer() {
      goUp();
    },
    goDownPlayer() {
      goDown();
    },
    resetAnimationValue() {
      // @ts-ignore
      refWarapDaraggable.current?.resetAnimationValue()
    }
  }));

  return (
    <>
      {/* <PanGestureHandler onGestureEvent={gestureHandler}> */}
      <Animated.View style={[styles.playerSheet,
        animatedFullScreenStyles
      ]}>
        {renderUiFullScreen()}
      </Animated.View>
      {/* </PanGestureHandler> */}
      <Animated.View
        style={[
          styles.miniPlayer,
          {
            bottom: tabBarHeight
          },
          containerMiniPlayer,
          miniPlayerAnimatedStyle
        ]}
      >
        <TouchableWithoutFeedback onPress={goUp}>
          <View>
            {renderMiniPlayer()}
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </>
  );
});

export default React.memo(PlayerSong);
