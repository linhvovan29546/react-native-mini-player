import React, { forwardRef, useImperativeHandle } from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from '../style';

interface PlayerProps {
  opaciTyPlayer: Animated.Node<number>;
  opaciTyMiniPlayer: Animated.Node<number>;
  translateY: Animated.Node<number>;
  goDown: () => void;
  goUp: () => void;
  maxHeightAnimation: Animated.Node<number>;
  renderUiFullScreen: () => JSX.Element;
  renderMiniPlayer: () => JSX.Element;
  tabBarHeight?: any;
  pointerEventsMiniPlayer: Animated.Node<"auto" | "none">
  containerMiniPlayer?: ViewStyle
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const { opaciTyPlayer, pointerEventsMiniPlayer,
    opaciTyMiniPlayer, translateY, maxHeightAnimation,
    tabBarHeight = 80, containerMiniPlayer,
    goDown, goUp, renderMiniPlayer, renderUiFullScreen, } = props;
  useImperativeHandle(ref, () => ({
    goUpPlayer() {
      goUp();
    },
    goDownPlayer() {
      goDown();
    },
  }));

  return (
    <>
      <Animated.View style={[styles.playerSheet, { transform: [{ translateY }] }]}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.player,
            {
              opacity: opaciTyPlayer,
            },
          ]}
        />
        {renderUiFullScreen()}
      </Animated.View>
      <Animated.View
        pointerEvents={pointerEventsMiniPlayer}
        style={[
          styles.miniPlayer,
          {
            bottom: tabBarHeight
          },
          containerMiniPlayer,
          {
            opacity: opaciTyMiniPlayer,
            maxHeight: maxHeightAnimation,
          },
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
