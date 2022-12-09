
// import withPlayer from '@src/decorators/withPlayer';
// import PlayerService from '@src/services/player-service';
import React from 'react';
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './style';
// import moment from 'moment';
// import event from '@src/constants/event';

interface MiniPlayerProps {
  onPress: () => void;
  songDetail: any;
  isPlay: boolean;
  isComplete: boolean;
  like: boolean;
}

const MiniPlayer = ({ onPress, songDetail, isPlay, isComplete, like }: MiniPlayerProps) => {
  //hide mini player
  if (!songDetail.id) return null;

  const handlePlay = () => {
    if (isPlay) {


    }
    if (!isComplete) {
      if (!isPlay) {
        // const now = moment().format('MM/DD/YYYY hh:mm:ss a');
      }

    } else {

    }
  };
  const handleLike = () => {
    // PlayerService.getInstance().handleLikeUnlikePodcast(songDetail.id, !like);
  };
  const renderIcon = () => {
    return (
      <View style={styles.containerIcon}>
        <TouchableOpacity onPress={handleLike}>

          {<Text style={[styles.styleImage, { marginHorizontal: 16 }]}>
            {like ? 'ICON_HEART' : 'ICON_HEART_BD_WHITE'}
          </Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlay}>
          {<Text>
            {isPlay ? 'BUTTON_PAUSE' : 'ICON_PLAY'}
          </Text>}
          {/* <Image source={isPlay ? BUTTON_PAUSE : ICON_PLAY} style={styles.styleImage} resizeMode="contain" /> */}
        </TouchableOpacity>
      </View>
    );
  };
  const goUpPlayer = () => {
    onPress && onPress();
  };
  return (
    <TouchableWithoutFeedback onPress={goUpPlayer}>
      <View style={styles.container}>
        <Image source={{ uri: songDetail.image }} />
        <Text style={styles.text} numberOfLines={1}>
          {songDetail.name}
        </Text>
        {renderIcon()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MiniPlayer;
