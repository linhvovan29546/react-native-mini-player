import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Animated from 'react-native-reanimated';
import Player from '../Player';
import MiniPlayer from '../MiniPlayer';
import { styles } from '../style';
// import IndicatorPlayer from '../Player/IndicatorPlayer';
interface PlayerProps {
  opaciTyPlayer: any;
  opaciTyMiniPlayer: any;
  translateY: any;
  goDown: () => void;
  goUp: () => void;
  maxHeightAnimation: any;
}
export interface PlayerRefModel {
  goUpPlayer: () => void;
  goDownPlayer: () => void;
  goDowValue: boolean;
}
const PlayerSong = forwardRef((props: PlayerProps, ref: any) => {
  const { opaciTyPlayer, opaciTyMiniPlayer, translateY, goDown, goUp, maxHeightAnimation } = props;
  const [down, setDown] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    goUpPlayer() {
      setDown(true);
      goUp();
    },
    goDownPlayer() {
      setDown(false);
      goDown();
    },
    goDowValue: down,
  }));

  // const renderIndicator = () => {
  //   return <IndicatorPlayer />;
  // };
  const songDetail = {
    id: 1,
    image: 'sss',
    name: 'See you again'
  }
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
        <Player
          songDetail={songDetail}
          onPress={() => {
            setDown(false);
            goDown();
          }}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.miniPlayer,
          {
            opacity: opaciTyMiniPlayer,
            maxHeight: maxHeightAnimation,
          },
        ]}
      >
        <MiniPlayer
          songDetail={songDetail}
          onPress={() => {
            setDown(true);
            goUp();
          }}
          isComplete={true}
          like={true}
          isPlay={true}
        />
      </Animated.View>
    </>
  );
});

export default React.memo(PlayerSong);
