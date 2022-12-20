import React, { forwardRef, useImperativeHandle, useRef } from "react";
// import useMiniPlayer from "src/hooks/useMiniPlayer";
import PlayerSong from "../PlayerSong";
import useMiniPlayer from "../../hooks/useMiniPlayer";
import Animated from "react-native-reanimated";

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
    bottomTabAnimatedStyle,
    goUpPlayer,
    goDownPlayer,
    refPlayer,
    animatedFullScreenStyles,
    miniPlayerAnimatedStyle
  } = useMiniPlayer(tabBarHeight, miniPlayerHeight);


  useImperativeHandle(ref, () => ({
    open() {
      refPlayer?.current.goUpPlayer();
    },
    close() {
      refPlayer?.current.goDownPlayer();
    },
  }));

  return (
    <>
      {
        hide ? null : <PlayerSong
          goDown={goDownPlayer}
          goUp={goUpPlayer}
          ref={refPlayer}
          renderUiFullScreen={renderUiFullScreen}
          renderMiniPlayer={renderMiniPlayer}
          tabBarHeight={tabBarHeight}
          header={header}
          enableDraggable={enableDraggable}
          animatedFullScreenStyles={animatedFullScreenStyles}
          miniPlayerAnimatedStyle={miniPlayerAnimatedStyle}
        />
      }
      <Animated.View style={bottomTabAnimatedStyle}>
        {children}
      </Animated.View>
    </>
  )
})

export default WrapPlayer