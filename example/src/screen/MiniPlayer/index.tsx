
// import withPlayer from '@src/decorators/withPlayer';
// import PlayerService from '@src/services/player-service';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import ProgressBar from '../ProgressBar'

interface MiniPlayerProps {
  songDetail: any;
}

const MiniPlayer = ({ songDetail, }: MiniPlayerProps) => {
  //hide mini player
  const handlePlay = () => {

  };
  const renderIcon = () => {
    return (
      <View style={styles.containerIcon}>
        <TouchableOpacity >
          {<Text style={[{ marginRight: 10, color: 'white' }]}>
            {'ICON_HEART'}
          </Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlay}>
          {<Text style={{ color: 'white' }}>
            {'ICON_PLAY'}
          </Text>}
        </TouchableOpacity>
      </View>
    );
  };

  const renderSlider = () => {
    return (
      <ProgressBar
        color={'white'}
        unfilledColor={'gray'}
        progress={0.2}
        height={2}
        width={300}
        useNativeDriver={true}
        borderRadius={2}
        indeterminate={false}
      />
    )
  }
  return (
    <View style={styles.container} >
      <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
        <Image source={{ uri: songDetail.image }} />
        <Text style={styles.text} numberOfLines={1}>
          {songDetail.name}
        </Text>
        {renderIcon()}
      </View>
      {renderSlider()}
    </View>
  );
};

export default MiniPlayer;
