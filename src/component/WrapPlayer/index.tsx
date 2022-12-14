import React, { forwardRef, useImperativeHandle } from "react";
import Animated from "react-native-reanimated"
import PlayerSong from "../PlayerSong";
import useMiniPlayer from "../../hooks/useMiniPlayer";

export interface WrapPlayerProps {
  children: () => JSX.Element;
  renderUiFullScreen: () => JSX.Element;
  renderMiniPlayer: () => JSX.Element;
  header?: () => JSX.Element;
  hide?: boolean;
  tabBarHeight?: number;
  miniPlayerHeight?: number;
  enableDraggable?: boolean;
}
const WrapPlayer = forwardRef((props: any, ref: any) => {
  const { children, renderUiFullScreen, renderMiniPlayer, hide = false, enableDraggable = false, tabBarHeight, miniPlayerHeight, header } = props
  const {
    translateY,
    translateBottomTab,
    goUpPlayer,
    goDownPlayer,
    opacity,
    opacityMiniPayer,
    refPlayer,
    maxHeightAnimation,
    pointerEvents
  } = useMiniPlayer(tabBarHeight, miniPlayerHeight);

  useImperativeHandle(ref, () => ({
    open() {
      goUpPlayer();
    },
    close() {
      goDownPlayer();
    },
  }));

  return (
    <>
      {
        hide ? null : <PlayerSong
          maxHeightAnimation={maxHeightAnimation}
          opaciTyPlayer={opacity}
          opaciTyMiniPlayer={opacityMiniPayer}
          translateY={translateY}
          goDown={goDownPlayer}
          goUp={goUpPlayer}
          ref={refPlayer}
          renderUiFullScreen={renderUiFullScreen}
          renderMiniPlayer={renderMiniPlayer}
          pointerEventsMiniPlayer={pointerEvents}
          tabBarHeight={tabBarHeight}
          header={header}
          enableDraggable={enableDraggable}
        />
      }
      <Animated.View
        style={[{
          transform: [{ translateY: translateBottomTab }],
        }]}

      >
        {children}
      </Animated.View>
    </>
  )
})

export default WrapPlayer