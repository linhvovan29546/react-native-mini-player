import React, { forwardRef, useImperativeHandle } from "react";
import Animated from "react-native-reanimated"
import PlayerSong from "../PlayerSong";
import useMiniPlayer from "../../hooks/useMiniPlayer";


const WrapPlayer = forwardRef((props: any, ref: any) => {
  const { children, renderUiFullScreen, renderMiniPlayer, hide = false } = props
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
  } = useMiniPlayer();

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
        />
      }
      <Animated.View
        style={[{
          transform: [{ translateY: translateBottomTab }],
        }]}>
        {children}
      </Animated.View>
    </>
  )
})

export default WrapPlayer