import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Button, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { styles } from '../style';
// import WrapDraggable from '../WrapDraggable';

interface PlayerProps {
  goDown: () => void;
  goUp: () => void;
  renderUiFullScreen: () => JSX.Element;
  renderMiniPlayer: () => JSX.Element;
  header?: () => JSX.Element;
  tabBarHeight?: any;
  containerMiniPlayer?: ViewStyle;
  enableDraggable?: boolean;
  animatedFullScreenStyles?: any
  miniPlayerAnimatedStyle?: any;
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const {
    tabBarHeight = 80, containerMiniPlayer,
    animatedFullScreenStyles, miniPlayerAnimatedStyle,
    goDown, goUp, renderMiniPlayer, renderUiFullScreen } = props;

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
      <Animated.View style={[styles.playerSheet,
        animatedFullScreenStyles
      ]}>
        {renderUiFullScreen()}
      </Animated.View>
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
