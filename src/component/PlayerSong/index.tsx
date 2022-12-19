import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from '../style';
// import WrapDraggable from '../WrapDraggable';

interface PlayerProps {
  opaciTyPlayer: Animated.Node<number>;
  opaciTyMiniPlayer: Animated.Node<number>;
  translateY: Animated.Node<number>;
  goDown: () => void;
  goUp: () => void;
  maxHeightAnimation: Animated.Node<number>;
  renderUiFullScreen: () => JSX.Element;
  renderMiniPlayer: () => JSX.Element;
  header?: () => JSX.Element;
  tabBarHeight?: any;
  pointerEventsMiniPlayer: Animated.Node<"auto" | "none">;
  containerMiniPlayer?: ViewStyle;
  enableDraggable?: boolean;
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const { pointerEventsMiniPlayer,
    opaciTyMiniPlayer, translateY, maxHeightAnimation,
    tabBarHeight = 80, containerMiniPlayer,
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

      <Animated.View style={[styles.playerSheet, { transform: [{ translateY }] }]}>
        {/* <WrapDraggable
          goDown={goDown}
          ref={refWarapDaraggable}
          enableDraggable={enableDraggable}
        > */}
        {renderUiFullScreen()}
        {/* </WrapDraggable> */}
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
