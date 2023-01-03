import React, { forwardRef, useImperativeHandle } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from '../style';

interface PlayerProps {
  opaciTyPlayer: any;
  opaciTyMiniPlayer: any;
  translateY: any;
  goDown: () => void;
  goUp: () => void;
  maxHeightAnimation: any;
  renderUiFullScreen: any;
  renderMiniPlayer: any;
  tabBarHeight?: any;
  pointerEventsMiniPlayer: any
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const { opaciTyPlayer, renderUiFullScreen, pointerEventsMiniPlayer, renderMiniPlayer, opaciTyMiniPlayer, translateY, goDown, goUp, maxHeightAnimation, tabBarHeight = 80 } = props;
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
