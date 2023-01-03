import React from "react";
import Animated from "react-native-reanimated"
import PlayerSong from "../PlayerSong";
import useMiniPlayer from "../../hooks/useMiniPlayer";


const WrapPlayer = (props: any) => {
  const { children } = props
  const {
    translateY,
    translateBottomTab,
    goUpPlayer,
    goDownPlayer,
    opacity,
    opacityMiniPayer,
    refPlayer,
    maxHeightAnimation,
  } = useMiniPlayer();
  return (
    <>
      <PlayerSong
        maxHeightAnimation={maxHeightAnimation}
        opaciTyPlayer={opacity}
        opaciTyMiniPlayer={opacityMiniPayer}
        translateY={translateY}
        goDown={goDownPlayer}
        goUp={goUpPlayer}
        ref={refPlayer}
      />
      <Animated.View style={[{ transform: [{ translateY: translateBottomTab }] }]}>
        {children}
      </Animated.View>
    </>
  )
}
export default React.memo(WrapPlayer);