
import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../constant/var';


type Styles = {
  playerSheet: ViewStyle;
  miniPlayer: ViewStyle;
  player: ViewStyle;
};
const TABBAR_HEIGHT = 80
export const styles: Styles = {
  playerSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.PRIMARY_COLOR,
    bottom: 0,
  },
  miniPlayer: {
    // flag absolute
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: TABBAR_HEIGHT,
    height: 'auto'
  },
  player: {
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
  },
};
